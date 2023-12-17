function addText() {
    const text = document.getElementById('user-text').value;
    if (text.trim() !== '') {
        const textArea = document.getElementById('text-area');
        const newText = document.createElement('div');
        newText.textContent = text;
        newText.classList.add('user-entry');
        textArea.appendChild(newText);
        document.getElementById('user-text').value = '';
    } else {
        alert('Please enter some text!');
    }
}
