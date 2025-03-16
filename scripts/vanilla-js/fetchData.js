document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => console.log('Fetched data:', data))
        .catch(err => console.error('Error:', err));
});
