document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("inputTextarea");
    const charCount = document.getElementById("charCount");
    const maxLength = textarea.getAttribute("maxlength");

    textarea.addEventListener("input", function () {
        const currentLength = textarea.value.length;
        charCount.textContent = `${currentLength}/${maxLength}`;

        if (currentLength >= maxLength) {
            charCount.classList.add("limit-reached");
        } else {
            charCount.classList.remove("limit-reached");
        }
    });
});
