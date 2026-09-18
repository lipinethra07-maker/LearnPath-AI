// ===============================
// PAGE NAVIGATION
// ===============================

function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.add("hidden");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.remove("hidden");
    }

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    buttons.forEach(button => {
        if (button.getAttribute("onclick") === `showPage('${pageName}')`) {
            button.classList.add("active");
        }
    });
}


// ===============================
// STUDY MATERIAL + GEMINI AI
// ===============================

async function analyzeContent() {

    const content = document.getElementById("content").value;
    const fileInput = document.getElementById("studyFile");
    const analysisBox = document.getElementById("analysis");

    if (!content.trim() && fileInput.files.length === 0) {
        alert("Please enter study material or upload a file.");
        return;
    }

    analysisBox.classList.remove("hidden");

    analysisBox.innerHTML = `
        <div class="card">
            <h2>🤖 LearnPath AI is analyzing...</h2>
            <p>Please wait a moment.</p>
        </div>
    `;

    try {

        // =========================
        // TEXT INPUT
        // =========================

        if (content.trim()) {

            const response = await fetch(
                "http://127.0.0.1:5000/analyze",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        content: content
                    })
                }
            );

            if (!response.ok) {
                throw new Error("AI server error");
            }

            const data = await response.json();

            analysisBox.innerHTML = `
                <div class="card">

                    <span class="tag">AI ANALYSIS</span>

                    <h2>🧠 Gemini AI Result</h2>

                    <div style="
                        white-space: pre-wrap;
                        line-height: 1.6;
                        margin-top: 15px;
                    ">
                        ${escapeHTML(data.result)}
                    </div>

                </div>
            `;

            return;
        }


        // =========================
        // PDF / PPTX FILE
        // =========================

        const formData = new FormData();

        formData.append("file", fileInput.files[0]);

        const response = await fetch(
            "http://127.0.0.1:5000/analyze",
            {
                method: "POST",
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error("AI server error");
        }

        const data = await response.json();

        analysisBox.innerHTML = `
            <div class="card">

                <span class="tag">AI ANALYSIS</span>

                <h2>🧠 Gemini AI Result</h2>

                <div style="
                    white-space: pre-wrap;
                    line-height: 1.6;
                    margin-top: 15px;
                ">
                    ${escapeHTML(data.result)}
                </div>

            </div>
        `;

    } catch (error) {

        console.error(error);

        analysisBox.innerHTML = `
            <div class="card">

                <h2>❌ AI Connection Error</h2>

                <p>
                    Could not connect to LearnPath AI.
                    Make sure the Python AI server is running.
                </p>

            </div>
        `;
    }
}


// ===============================
// PREVENT AI RESULT FROM BREAKING PAGE
// ===============================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ===============================
// QUIZ
// ===============================

const questions = [

    {
        question: "What is Machine Learning?",
        options: [
            "A. A method that allows computers to learn from data",
            "B. A type of computer hardware",
            "C. An operating system",
            "D. A database"
        ],
        answer: 0
    },

    {
        question: "Which type of learning uses labelled data?",
        options: [
            "A. Unsupervised Learning",
            "B. Supervised Learning",
            "C. Random Learning",
            "D. Manual Learning"
        ],
        answer: 1
    },

    {
        question: "Which of these is commonly used for Machine Learning?",
        options: [
            "A. Data",
            "B. Keyboard",
            "C. Monitor",
            "D. Printer"
        ],
        answer: 0
    },

    {
        question: "What does a trained ML model do?",
        options: [
            "A. Stores electricity",
            "B. Makes predictions from learned patterns",
            "C. Creates hardware",
            "D. Repairs computers"
        ],
        answer: 1
    },

    {
        question: "Which is an example of Machine Learning?",
        options: [
            "A. Spam email detection",
            "B. Turning on a light manually",
            "C. Charging a laptop",
            "D. Printing a document"
        ],
        answer: 0
    }

];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


// ===============================
// LOAD QUIZ
// ===============================

function loadQuiz() {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    showQuestion();
}


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

    const quizBox = document.getElementById("quiz");

    const question = questions[currentQuestion];

    quizBox.querySelector(".tag").innerText =
        `QUESTION ${currentQuestion + 1} / ${questions.length}`;

    quizBox.querySelector(".quiz-card h2").innerText =
        question.question;

    const oldOptions =
        quizBox.querySelectorAll(".option");

    oldOptions.forEach((button, index) => {

        button.innerText = question.options[index];

        button.classList.remove("selected");

        button.onclick = function () {
            selectAnswer(this, index);
        };

    });

    const nextButton =
        quizBox.querySelector(".generate-btn");

    nextButton.innerText =
        currentQuestion === questions.length - 1
        ? "Finish Quiz →"
        : "Next Question →";

    document.getElementById("quizResult").innerHTML = "";

    selectedAnswer = null;
}


// ===============================
// SELECT ANSWER
// ===============================

function selectAnswer(button, index) {

    const options =
        document.querySelectorAll(".option");

    options.forEach(option => {
        option.classList.remove("selected");
    });

    button.classList.add("selected");

    selectedAnswer = index;
}


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer first.");
        return;
    }

    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showQuizResult();

    }
}


// ===============================
// QUIZ RESULT
// ===============================

function showQuizResult() {

    const quizCard =
        document.querySelector(".quiz-card");

    quizCard.innerHTML = `

        <div class="success-message">

            <h2>🎉 Quiz Completed!</h2>

            <h1>${score} / ${questions.length}</h1>

            <p>
                ${
                    score >= 4
                    ? "🌟 Excellent! You understand this topic very well."
                    : score >= 3
                    ? "👏 Good progress! Revise the weak concepts once more."
                    : "💡 Don't worry! Review the topic and try again."
                }
            </p>

            <button
                class="generate-btn"
                onclick="restartQuiz()"
            >
                🔄 Try Again
            </button>

        </div>

    `;
}


// ===============================
// RESTART QUIZ
// ===============================

function restartQuiz() {

    location.reload();

}


// ===============================
// AI CHAT
// ===============================

function sendMessage() {

    const input =
        document.getElementById("chatInput");

    const question =
        input.value.trim();

    if (question === "") {
        return;
    }

    const chatBox =
        document.getElementById("chatBox");

    chatBox.innerHTML += `

        <div class="user-message">
            👤 ${escapeHTML(question)}
        </div>

    `;

    let answer =
        getDemoAnswer(question);

    chatBox.innerHTML += `

        <div class="ai-message">
            🤖 ${answer}
        </div>

    `;

    input.value = "";

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


// ===============================
// DEMO CHATBOT
// ===============================

function getDemoAnswer(question) {

    const q = question.toLowerCase();

    if (
        q.includes("what is") ||
        q.includes("define")
    ) {

        return `
            <strong>Simple Explanation:</strong><br>
            Machine Learning is a part of AI where computers
            learn patterns from data and use those patterns
            to make predictions or decisions.
        `;

    }

    if (q.includes("example")) {

        return `
            <strong>Example:</strong><br>
            Email spam detection is a common Machine Learning
            application.
        `;

    }

    if (
        q.includes("hint") ||
        q.includes("remember")
    ) {

        return `
            💡 <strong>Quick Hint:</strong><br>
            Data → Training → Model → Prediction
        `;

    }

    if (q.includes("difference")) {

        return `
            <strong>Quick Difference:</strong><br>
            Supervised Learning uses labelled data,
            while Unsupervised Learning finds patterns
            without labels.
        `;

    }

    if (
        q.includes("simple") ||
        q.includes("explain")
    ) {

        return `
            🧠 <strong>In simple words:</strong><br>
            We give the computer data so it can learn patterns
            and make predictions.
        `;

    }

    return `
        I understood your question about
        <strong>Machine Learning</strong>.<br><br>

        💡 Try asking:<br>
        • What is Machine Learning?<br>
        • Give me an example<br>
        • Explain simply<br>
        • Give me a hint
    `;
}


// ===============================
// START
// ===============================

window.onload = function () {

    loadQuiz();

};