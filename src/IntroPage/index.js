// src/IntroPage.js
import React from "react";
import { Link } from "react-router-dom";
import './IntroPage.css'; // Assuming you have a CSS file for styles

const IntroPage = () => {
    return (
        <div className="intro-container">
            <h1>Welcome to the Tool Suite</h1>
            <p className="intro-description">
                Explore our suite of powerful tools designed to help you format, analyze, and edit your content effortlessly.
            </p>
            <div className="utility-container">
                <div className="utility-card">
                    <h2>JSON Formatter</h2>
                    <p>
                        Format and validate your JSON data. Make your JSON readable and organized.
                    </p>
                    <Link to="/json-formatter">
                        <button className="utility-button">Use JSON Formatter</button>
                    </Link>
                </div>
                <div className="utility-card">
                    <h2>Word Count</h2>
                    <p>
                        Count the number of words in your text quickly and easily.
                    </p>
                    <Link to="/word-count">
                        <button className="utility-button">Use Word Count</button>
                    </Link>
                </div>
                <div className="utility-card">
                    <h2>Sentence Comparison</h2>
                    <p>
                        Compare sentences for similarity and differences with our intuitive tool.
                    </p>
                    <Link to="/sentence-comparison">
                        <button className="utility-button">Compare Sentences</button>
                    </Link>
                </div>
                <div className="utility-card">
                    <h2>PDF Editor</h2>
                    <p>
                        Upload and edit your PDF documents with ease. Change text, add annotations, and more.
                    </p>
                    <Link to="/pdf-editor">
                        <button className="utility-button">Use PDF Editor</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default IntroPage;