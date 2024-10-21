// src/JsonFormatter.js
import React, { useState } from 'react';
import JsonViewer from './JsonViewer'; // Ensure this is your viewer component
import '../App.css';

function JsonFormatter() {
    const [inputJson, setInputJson] = useState('');
    const [formattedJson, setFormattedJson] = useState('');
    const [error, setError] = useState('');

    const formatJson = () => {
        try {
            const parsedJson = JSON.parse(inputJson);
            setFormattedJson(parsedJson);
            setError('');
        } catch (e) {
            setError('Invalid JSON. Please check your input.');
            setFormattedJson('');
        }
    };

    const clearWholeData = () => {
        setInputJson('');
        setFormattedJson('');
        setError('');
    };

    return (
        <div className="json-formatter">
            <h2>JSON Formatter</h2>
            <p className="instructions">
                Paste your JSON code into the box, then click "Format JSON".
            </p>
            <div className="button-container">
                <button onClick={formatJson}>Format JSON</button>
                <button onClick={clearWholeData}>Clear</button>
            </div>
            <div className="content">
                <div className="input-section">
                    <textarea
                        className="input-area"
                        value={inputJson}
                        onChange={(e) => setInputJson(e.target.value)}
                        placeholder="Paste the JSON code here (your code is not saved anywhere)"
                    />
                    {error && <p className="error">{error}</p>}
                </div>
                <div className="output-section">
                    <div className="output-area">
                        {formattedJson ? (
                            <JsonViewer data={formattedJson} />
                        ) : (
                            <p>Your formatted JSON will appear here...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JsonFormatter;