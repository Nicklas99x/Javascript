document.getElementById('sendRequest').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Serverens svar:', xhr.responseText);
        } else {
            console.error('Fejl ved anmodning:', xhr.status);
        }
    };
    xhr.send();
});
