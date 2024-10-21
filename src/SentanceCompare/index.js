// src/SentenceComparison.js
import React, { useState } from 'react';
import './SentenceComparison.css'; // Create a CSS file for styling

const SentenceComparison = () => {
    const [sentence1, setSentence1] = useState('');
    const [sentence2, setSentence2] = useState('');
    const [comparisonResult, setComparisonResult] = useState('');

    const compareSentences = () => {
        if (sentence1.trim() === '' || sentence2.trim() === '') {
            setComparisonResult('Please enter both sentences.');
            return;
        }
        const words1 = sentence1.trim().split(/\s+/);
        const words2 = sentence2.trim().split(/\s+/);

        const uniqueWords1 = new Set(words1);
        const uniqueWords2 = new Set(words2);

        const commonWords = [...uniqueWords1].filter(word => uniqueWords2.has(word));
        const diffInSentence1 = [...uniqueWords1].filter(word => !uniqueWords2.has(word));
        const diffInSentence2 = [...uniqueWords2].filter(word => !uniqueWords1.has(word));

        setComparisonResult(`
            Common Words: ${commonWords.join(', ') || 'None'}
            Unique to Sentence 1: ${diffInSentence1.join(', ') || 'None'}
            Unique to Sentence 2: ${diffInSentence2.join(', ') || 'None'}
        `);
    };

    return (
        <div className="sentence-comparison-container">
            <h2>Sentence Comparison Tool</h2>
            <div className="input-area">
                <textarea
                    value={sentence1}
                    onChange={(e) => setSentence1(e.target.value)}
                    placeholder="Enter the first sentence..."
                />
                <textarea
                    value={sentence2}
                    onChange={(e) => setSentence2(e.target.value)}
                    placeholder="Enter the second sentence..."
                />
            </div>
            <div className="button-container">
                <button onClick={compareSentences}>Compare Sentences</button>
                <button onClick={() => { setSentence1(''); setSentence2(''); setComparisonResult(''); }}>Clear</button>
            </div>
            <div className="result">
                <h3>Comparison Result:</h3>
                <pre>{comparisonResult || 'Results will appear here...'}</pre>
            </div>
        </div>
    );
};

export default SentenceComparison;