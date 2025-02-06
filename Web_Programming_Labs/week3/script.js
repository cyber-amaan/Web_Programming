// Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.problems').forEach((element) => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select all toggle buttons
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            let codeBlock = this.parentElement.querySelector("pre"); // Get the <pre> inside the same container
            if (codeBlock.classList.contains("hidden")) {
                codeBlock.classList.remove("hidden");
                this.innerText = "Hide";
            } else {
                codeBlock.classList.add("hidden");
                this.innerText = "Show";
            }
        });
    });

    // Select all copy buttons
    document.querySelectorAll(".copy-btn").forEach(button => {
        button.addEventListener("click", function () {
            let codeBlock = this.parentElement.querySelector("pre"); // Get the <pre> inside the same container
            if (!codeBlock.classList.contains("hidden")) { // Copy only if the code is visible
                let text = codeBlock.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    this.innerText = "Copied!";
                    setTimeout(() => this.innerText = "Copy", 1500);
                });
            } else {
                alert("Please show the code before copying.");
            }
        });
    });
});