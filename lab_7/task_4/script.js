document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll('.item');
    console.log('Number of Categories: ' + categories.length);
    
    categories.forEach(e => {
        console.log('Category: '+ e.querySelector('h2').textContent);
        const elements = e.querySelectorAll('li');
        console.log('Elements: ' + elements.length);
    });
});