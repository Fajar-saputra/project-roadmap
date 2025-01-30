const textarea = document.getElementById('messageInput');
const counter = document.getElementById('charCounter');
const maxLength = 280;

function updateCounter() {
    const currentLength = textarea.value.length;
    counter.textContent = `${currentLength}/${maxLength} karakter`;

    if (currentLength >= maxLength) {
        counter.classList.add('limit');
    } else {
        counter.classList.remove('limit');
    }
}

textarea.addEventListener('input', function (e) {
    if (this.value.length > maxLength) {
        this.value = this.value.substring(0, maxLength);
    }
    updateCounter();
});

// Initialize counter
updateCounter();