# 🤖 AI Chatbot - FastAPI + React

A modern, full-stack AI chatbot application built with FastAPI backend and React frontend. Get intelligent responses powered by OpenAI's GPT models through a beautiful, responsive web interface.

![Python](https://img.shields.io/badge/Python-3.13-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-green.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-orange.svg)

## ✨ Features

- 🎯 **Intelligent AI Responses** - Powered by OpenAI's GPT-4o-mini model
- 🌐 **Modern Web Interface** - Clean, responsive React frontend
- ⚡ **Fast API Backend** - High-performance FastAPI server
- 🔒 **CORS Enabled** - Seamless frontend-backend communication
- 📝 **Topic-Based Queries** - Get 5 interesting facts about any topic
- 🎨 **Beautiful UI** - Gradient backgrounds, smooth animations
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🛡️ **Error Handling** - Graceful error management and user feedback

## 🚀 Quick Start

### Prerequisites

- Python 3.13+ 
- Node.js 14+
- OpenAI API Key

### 1. Clone the Repository

```bash
git clone https://github.com/SaqlainMalik1729/FastAPI_Demo.git
cd FastAPI_Demo
```

### 2. Backend Setup

#### Create Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate  # On Windows
# or
source venv/bin/activate  # On macOS/Linux
```

#### Install Dependencies
```bash
pip install fastapi uvicorn langchain-openai python-dotenv
```

#### Environment Configuration
Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

### 4. Run the Application

#### Start Backend Server
```bash
# From root directory
uvicorn main:app --reload
```
Backend will run on: `http://localhost:8000`

#### Start Frontend Development Server
```bash
# In a new terminal, from frontend directory
cd frontend
npm start
```
Frontend will run on: `http://localhost:3000`

## 📁 Project Structure

```
FastAPI_Demo/
│
├── 📄 main.py              # FastAPI application with endpoints
├── 🤖 chatbot.py           # OpenAI integration with LangChain
├── 🔧 utils.py             # Utility functions for data handling
├── 📊 patients.json        # Sample data file
├── 🔒 .env                 # Environment variables (not in git)
├── 📝 .gitignore           # Git ignore file
├── 📋 requirements.txt     # Python dependencies (create this)
│
└── 📁 frontend/            # React application
    ├── 📁 public/
    │   └── 📄 index.html   # HTML template
    ├── 📁 src/
    │   ├── ⚛️ App.js       # Main React component
    │   ├── 🎨 App.css      # Styling
    │   └── 🚀 index.js     # React entry point
    └── 📦 package.json     # Node.js dependencies
```

## 🔌 API Endpoints

### Base URL: `http://localhost:8000`

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Welcome message |
| `/test` | GET | Test endpoint |
| `/name/{name}` | GET | Personalized greeting |
| `/chat/{topic}` | GET | Get AI facts about a topic |

### Example API Usage

```bash
# Get facts about space
curl http://localhost:8000/chat/space

# Response
{
  "response": "1. Space is a vast, seemingly infinite expanse...\n2. The observable universe is estimated to be about 93 billion light-years in diameter...\n..."
}
```

## 🎨 Frontend Features

### User Interface
- **Clean Design**: Modern gradient backgrounds with smooth animations
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Buttons with hover effects and loading states
- **Error Handling**: User-friendly error messages

### User Experience
- **Real-time Loading**: Visual feedback during API calls
- **Form Validation**: Input validation with helpful messages
- **Clear Button**: Easy way to reset the conversation
- **Formatted Responses**: Well-structured display of AI responses

## 🛠️ Technology Stack

### Backend
- **FastAPI**: Modern, fast web framework for building APIs
- **LangChain**: Framework for developing applications with LLMs
- **OpenAI**: GPT-4o-mini model for intelligent responses
- **Python-dotenv**: Environment variable management
- **Uvicorn**: ASGI server for running FastAPI

### Frontend
- **React**: Popular JavaScript library for building user interfaces
- **Create React App**: Toolchain for React development
- **CSS3**: Modern styling with gradients and animations
- **Fetch API**: For making HTTP requests to the backend

## 🔧 Configuration

### Backend Configuration

The FastAPI application includes:
- **CORS Middleware**: Enables cross-origin requests from React frontend
- **Error Handling**: Comprehensive error management
- **Environment Variables**: Secure API key management

### Frontend Configuration

The React application features:
- **State Management**: Using React hooks (useState)
- **Event Handling**: Form submission and user interactions
- **Conditional Rendering**: Dynamic UI based on application state
- **API Integration**: Seamless communication with FastAPI backend

## 🌐 Deployment

### Backend Deployment Options
- **Heroku**: Easy deployment with Procfile
- **Railway**: Modern cloud platform
- **Render**: Free tier available
- **DigitalOcean**: VPS deployment

### Frontend Deployment Options
- **Vercel**: Optimized for React applications
- **Netlify**: Continuous deployment from Git
- **GitHub Pages**: Free static site hosting
- **Surge.sh**: Simple static web publishing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Saqlain Malik**
- GitHub: [@SaqlainMalik1729](https://github.com/SaqlainMalik1729)
- Repository: [FastAPI_Demo](https://github.com/SaqlainMalik1729/FastAPI_Demo)

## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) for the amazing web framework
- [OpenAI](https://openai.com/) for providing the GPT models
- [LangChain](https://langchain.com/) for LLM application development
- [React](https://reactjs.org/) for the frontend framework

## 🐛 Bug Reports & Feature Requests

If you encounter any bugs or have feature requests, please create an issue on the [GitHub repository](https://github.com/SaqlainMalik1729/FastAPI_Demo/issues).

## 📞 Support

For support, email saqlainmalik1729@gmail.com or create an issue in the repository.

---

⭐ Star this repository if you found it helpful!
