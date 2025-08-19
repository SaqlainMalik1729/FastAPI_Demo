import React, { useState } from 'react';
import './App.css';

function App() {
  const [topic, setTopic] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const apiResponse = await fetch(`http://localhost:8000/chat/${encodeURIComponent(topic)}`);
      
      if (!apiResponse.ok) {
        throw new Error(`HTTP error! status: ${apiResponse.status}`);
      }
      
      const data = await apiResponse.json();
      setResponse(data.response);
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setTopic('');
    setResponse('');
    setError('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🤖 AI Chatbot</h1>
        <p>Ask me about any topic and I'll give you 5 interesting facts!</p>
      </header>
      
      <main className="main-content">
        <form onSubmit={handleSubmit} className="chat-form">
          <div className="input-group">
            <label htmlFor="topic">Enter a topic:</label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Space, Technology, History..."
              disabled={loading}
            />
          </div>
          
          <div className="button-group">
            <button type="submit" disabled={loading || !topic.trim()}>
              {loading ? 'Getting Facts...' : 'Get Facts'}
            </button>
            <button type="button" onClick={handleClear} disabled={loading}>
              Clear
            </button>
          </div>
        </form>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {response && (
          <div className="response-container">
            <h3>Facts about "{topic}":</h3>
            <div className="response-content">
              <pre>{response}</pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
