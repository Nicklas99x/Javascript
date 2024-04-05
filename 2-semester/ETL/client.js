// client.js

const word = 'hello'; // Det ord, du vil søge efter

fetch(`http://localhost:3000/search/${word}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Result:', data);
    // Her kan du behandle dataene, f.eks. vise dem på en webside
  })
  .catch(error => {
    console.error('There was a problem with the request:', error);
  });
