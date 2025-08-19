from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from chatbot import get_response
from utils import load_data

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React development server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def hello():
    return {"message": "Hello, World!"}

@app.get("/test")
def test():
    return {"message": "This is a test endpoint."}

@app.get("/name/{name}")
def read_name(name: str):
    return {"Name : ": name}

@app.get("/chat/{topic}")
def chat_with_bot(topic: str):
    response = get_response(topic)
    return {"response": response}

@app.get("/patients")
def get_patients():
    patients = load_data()
    return {"patients": patients}