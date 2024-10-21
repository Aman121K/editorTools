// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IntroPage from './IntroPage'; // Your IntroPage component
import JsonFormatter from './JsonFormatter'; // Your JSON formatter component
import PdfEditor from './PdfEditor'; // Your PDF editor component
import WordCount from './WordCount'; // Your Word Count component
import './App.css'; // Add your existing CSS
import SentenceComparison from './SentanceCompare';
function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="/json-formatter" element={<JsonFormatter />} />
                    <Route path="/pdf-editor" element={<PdfEditor />} />
                    <Route path="/word-count" element={<WordCount />} />
                    <Route path="/sentence-comparison" element={<SentenceComparison />} /> {/* Add Sentence Comparison route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;