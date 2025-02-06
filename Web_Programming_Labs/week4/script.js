// Select the main container where content will be inserted
const app = document.getElementById("app");

// Create home title section
const homeDiv = document.createElement("div");
homeDiv.className = "home";

const h1 = document.createElement("h1");
h1.innerHTML = `JavaScript Basic 
    <span style="--i:3;" data-text="Exercises">Exercises</span>
    <span style="--i:2;" data-text="Practice">Practice</span>
    <span style="--i:1;" data-text="Solution">Solution</span>`;
homeDiv.appendChild(h1);
app.appendChild(homeDiv);

// Function to create problem sections dynamically
// Function to create problem sections dynamically
function createProblem(id, title, description, codeSnippet, correctAnswer) {
    const problemDiv = document.createElement("div");
    problemDiv.className = "problems";
    problemDiv.id = id;
    problemDiv.style.filter = "blur(5px)"; // Initially blurred
    problemDiv.style.transition = "filter 0.3s ease";

    // Problem Title
    const h2 = document.createElement("h2");
    h2.textContent = title;

    // Problem Description
    const p = document.createElement("p");
    p.textContent = description;

    // Buttons
    const copyButton = document.createElement("button");
    copyButton.className = "copy-btn";
    copyButton.textContent = "Copy";

    const toggleButton = document.createElement("button");
    toggleButton.className = "toggle-btn";
    toggleButton.textContent = "Hide";

    // Code Container
    const codeContainer = document.createElement("div");
    codeContainer.className = "code-container";

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.className = "language-javascript";
    code.textContent = codeSnippet;

    pre.appendChild(code);
    codeContainer.appendChild(pre);

    // User Input Field
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.className = "problem-input";
    inputField.placeholder = "Enter your answer...";

    // Submit Button
    const submitButton = document.createElement("button");
    submitButton.className = "submit-btn";
    submitButton.textContent = "Check Answer";

    // Feedback
    const feedback = document.createElement("p");
    feedback.className = "feedback";

    // Blur Effect: Show on Hover
    problemDiv.addEventListener('mouseenter', () => {
        problemDiv.style.filter = "blur(0px)";
    });

    problemDiv.addEventListener('mouseleave', () => {
        problemDiv.style.filter = "blur(5px)";
    });

    // Copy Code Button
    copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(codeSnippet).then(() => {
            alert("Code copied to clipboard!");
        });
    });

    // Toggle Code Visibility
    toggleButton.addEventListener("click", function () {
        if (codeContainer.style.display === "none") {
            codeContainer.style.display = "block";
            toggleButton.textContent = "Hide";
        } else {
            codeContainer.style.display = "none";
            toggleButton.textContent = "Show";
        }
    });

    // Check Answer on Button Click
    submitButton.addEventListener("click", function () {
        let userAnswer = inputField.value.trim(); // Trim spaces
        let correct = correctAnswer.toString().trim(); // Ensure correctAnswer is a string

        // If correct answer is a number, compare as a number
        if (!isNaN(correct)) {
            userAnswer = parseFloat(userAnswer);
            correct = parseFloat(correct);
        }

        if (userAnswer === correct) {
            feedback.textContent = "✅ Correct!";
            feedback.classList.add("correct");
            feedback.classList.remove("incorrect");
        } else {
            feedback.textContent = `❌ Incorrect. Hint: Check your calculation!`;
            feedback.classList.add("incorrect");
            feedback.classList.remove("correct");
        }
    });

    // Append elements
    problemDiv.appendChild(h2);
    problemDiv.appendChild(p);
    problemDiv.appendChild(copyButton);
    problemDiv.appendChild(toggleButton);
    problemDiv.appendChild(codeContainer);
    problemDiv.appendChild(inputField);
    problemDiv.appendChild(submitButton);
    problemDiv.appendChild(feedback);

    app.appendChild(problemDiv);
}
const problems = [
    {
        id: "p1",
        title: "Calculate Area of Triangle (Sides: 5, 6, 7)",
        description: "Find the area of a triangle with sides 5, 6, and 7 using Heron's formula.",
        codeSnippet: `var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);`,
        correctAnswer: 14.7
    },
    {
        id: "p2",
        title: "Rotate String 'w3resource' Periodically",
        description: "What is the first letter after 1 full rotation of 'w3resource'?",
        codeSnippet: `function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;
    
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}`,
        correctAnswer: "w"
    },
    {
        id: "p3",
        title: "Check Leap Year (Gregorian Calendar)",
        description: "What does leapyear(2000) return?",
        codeSnippet: `function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));`,
        correctAnswer: "true"
    },
    {
        id: "p4",
        title: "Find Years When Jan 1 is Sunday (2014–2050)",
        description: "What is the first year after 2014 where Jan 1 is a Sunday?",
        codeSnippet: `for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
        console.log("1st January is a Sunday in " + year);
    }
}`,
        correctAnswer: 2017
    }
];

// Generate problems dynamically
problems.forEach(problem => {
    createProblem(problem.id, problem.title, problem.description, problem.codeSnippet, problem.correctAnswer);
});

// Extra Interactive Feature: Dark Mode Toggle
const darkModeButton = document.createElement("button");
darkModeButton.textContent = "Toggle Dark Mode";
darkModeButton.style.marginTop = "20px";
darkModeButton.style.padding = "10px";
darkModeButton.style.cursor = "pointer";




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
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-theme");
    toggleButton.textContent = "Change Theme";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
    });
});

document.querySelectorAll('.problems').forEach(problem => {
    problem.addEventListener('mouseenter', () => {
        problem.style.filter = "blur(0px)";
    });

    problem.addEventListener('mouseleave', () => {
        problem.style.filter = "blur(5px)";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const problems = document.querySelectorAll('.problems');

    problems.forEach(problem => {
        const input = problem.querySelector('.problem-input');
        const button = problem.querySelector('.submit-btn');
        const feedback = problem.querySelector('.feedback');
        const correctAnswer = problem.getAttribute('data-answer'); // Set expected answer in HTML

        // Blur effect interactions
        problem.addEventListener('mouseenter', () => {
            problem.style.filter = "blur(0px)";
        });

        problem.addEventListener('mouseleave', () => {
            problem.style.filter = "blur(5px)";
        });


    });
});


