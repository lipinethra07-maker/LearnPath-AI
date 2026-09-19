LearnPath AI
AI Personal Learning Path Generator with Multilingual Support
LearnPath AI is an AI-powered personal learning companion designed to help students understand study materials, identify weak areas, practice through MCQs, create personalized learning paths, and manage their study schedules.
🚀 Features
- 📚 Study Material Analysis – Upload PDFs, PPTs, notes, images, or enter study topics.
- 🤖 AI Learning Assistant – Provides explanations, summaries, important points, and revision hints.
- 📝 Quick MCQ Quiz – Generates practice questions based on learning content.
- 🎯 Weak Area Detection – Identifies topics that need more revision.
- 🛣️ Personalized Learning Path – Creates a structured learning journey.
- 📊 Progress Tracking – Tracks subject-wise and overall learning progress.
- 📅 Smart Study Schedule – Helps organize study time based on progress and priorities.
- 💬 AI Chat – Allows students to ask questions about their learning material.
- 🌐 Multilingual Learning – Supports learning in multiple languages.
- 🎉 Progress Motivation – Provides encouragement as students improve.
💡 Problem
Students often struggle with:
- Scattered study materials
- Too many learning resources
- Difficulty identifying weak topics
- Manual study planning
- Lack of personalized learning
- Language barriers
- Limited revision time
💡 Our Solution
LearnPath AI brings these features together in one platform:
Study Material
      ↓
AI Analysis
      ↓
Topic Understanding
      ↓
Weak Area Detection
      ↓
Personalized Learning Path
      ↓
MCQ Practice
      ↓
Progress Tracking
      ↓
Adaptive Study Schedule
🏗️ System Architecture
USER
  ↓
FRONTEND
HTML + CSS + JavaScript
  ↓
API
  ↓
BACKEND
Flask / C Backend Integration
  ↓
GENAI SERVICE
Python
  ↓
GEMINI AI
  ↓
AI RESPONSE
  ↓
BACKEND
  ↓
FRONTEND
  ↓
USER
🛠️ Technologies Used
Frontend
- HTML
- CSS
- JavaScript
Backend
- Python
- Flask
- Flask-CORS
AI
- Google Gemini API
- Generative AI
- Prompt Engineering
- Context-based AI responses
File Processing
- PyPDF
- Python-PPTX
- Pillow
Database
- MySQL
📂 Project Structure
LearnPath AI
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend
│   └── server.py
│
├── genai
│   └── ai.py
│
└── README.md
🔄 How It Works
1. The student opens LearnPath AI.
2. The student uploads study material or enters a topic.
3. The system analyzes the learning content.
4. Important concepts and revision points are displayed.
5. Students can practice using MCQs.
6. Quiz performance helps track learning progress.
7. The system identifies areas that need more attention.
8. A personalized learning path and schedule can be followed.
🎯 Target Users
- School students
- College students
- Self-learners
- Students preparing for examinations
- Multilingual learners
🌟 Innovation
LearnPath AI combines:
- AI-powered content understanding
- Personalized learning paths
- Weak-topic identification
- Adaptive study scheduling
- MCQ-based practice
- Progress tracking
- Multilingual learning
into a single student-focused platform.
🔐 Security
The Gemini API key should be stored on the backend/server side and should never be exposed in frontend JavaScript or committed to GitHub.
Example:
GEMINI_API_KEY = your_api_key
▶️ Running the Project
1. Install dependencies
py -m pip install flask flask-cors google-genai pypdf python-pptx pillow
2. Set Gemini API key
PowerShell:
$env:GEMINI_API_KEY="YOUR_API_KEY"
3. Start the backend
cd backend
py server.py
4. Open the frontend
Open:
frontend/index.html
or use the VS Code Live Server extension.
🏆 Hackathon
Project: LearnPath AI
Theme: AI Personal Learning Path Generator with Multilingual Support
Hackathon: DELULU TO DEPLOY 2026
👥 Team
Team: Nova Nexus
- P. Lipi Nethra
- S. Riati Sharpnu
- S. Madhu Kowshika
🔮 Future Scope
- Voice-based learning assistant
- Mobile application
- More language support
- Advanced personalized recommendations
- Integration with additional educational platforms
- Improved learning analytics
- Teacher/mentor dashboard
- Offline learning support
