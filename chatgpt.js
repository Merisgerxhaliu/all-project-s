document.getElementById('myButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = 'Faleminderit që klikuat butonin!';
    message.classList.remove('hidden');
});
