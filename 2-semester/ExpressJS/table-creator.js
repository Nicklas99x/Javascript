const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const usersFilePath = path.join(__dirname, 'users.json');
const port = 5000;

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));

// Middleware til brugerauthentificering
app.use((req, res, next) => {
    if (req.query.username) {
        const user = getUserByUsername(req.query.username);

        if (user) {
            req.user = user;
        }
    }

    next();
});

app.get('/', (req, res) => {
    if (req.user) {
        res.render('profile', { user: req.user });
    } else {
        res.redirect('/login');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = readUserData(usersFilePath);
    console.log('All users:', users);

    const user = authenticateUser(users, username, password);
    console.log('Authenticated user:', user);

    if (user) {
        // Opdater lastLogin til aktuel tid
        user.lastLogin = new Date().toISOString();

        // Find brugerens indeks i arrayet
        const userIndex = users.findIndex(u => u.username === username);

        // Opdater brugerdata i JSON-filen
        if (userIndex !== -1) {
            users[userIndex] = user;
            updateUserData(usersFilePath, users);
        }
        req.session.user = user;

        res.redirect(`/?username=${username}`);
    } else {
        res.status(401).send('Invalid username or password');
    }
});


app.post('/generateTable', (req, res) => {
    if (!req.user) {
        return res.status(401).send('Unauthorized. Please log in.');
    }

    const height = parseInt(req.body.height);
    const width = parseInt(req.body.width);

    if (isNaN(height) || isNaN(width) || height < 0 || width < 0 || height > 50000 || width > 50000) {
        return res.status(418).send('Negative numbers can not make up a table');
    }

    const tableData = generateRandomTable(height, width);

    res.render('table', { tableData });
});

function getUserByUsername(username) {
    const usersData = readUserData(usersFilePath);
    return usersData.find(user => user.username === username);
}

function authenticateUser(users, username, password) {
    return users.find(u => u.username === username && u.password === password);
}
function readUserData(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
        return [];
    }
}
function updateUserData(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function generateRandomTable(height, width) {
    const table = [];

    for (let i = 0; i < height; i++) {
        const row = [];

        for (let j = 0; j < width; j++) {
            row.push(Math.floor(Math.random() * 1001));
        }
        table.push(row);
    }
    return table;
}

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
    console.error(`Error: ${err.stack}`);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});