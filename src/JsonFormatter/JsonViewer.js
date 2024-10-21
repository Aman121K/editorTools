// src/JsonViewer.js
import React, { useState } from 'react';

const JsonViewer = ({ data }) => {
    const [isOpen, setIsOpen] = useState(true);

    const renderData = (data) => {
        if (Array.isArray(data)) {
            return (
                <div className="json-array">
                    <span className="bracket">[</span>
                    {isOpen && (
                        <ul>
                            {data.map((item, index) => (
                                <li key={index}>
                                    {typeof item === 'object' ? (
                                        <JsonViewer data={item} />
                                    ) : (
                                        <span className="json-value">{JSON.stringify(item)}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                    <span className="bracket">]</span>
                </div>
            );
        } else if (typeof data === 'object' && data !== null) {
            return (
                <div className="json-object">
                    <span className="bracket">{isOpen ? '{' : '{'}</span>
                    <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? '−' : '+'}
                    </button>
                    {isOpen && (
                        <ul>
                            {Object.keys(data).map((key) => (
                                <li key={key}>
                                    <span className="json-key">{key}:</span>
                                    {typeof data[key] === 'object' ? (
                                        <JsonViewer data={data[key]} />
                                    ) : (
                                        <span className="json-value">{JSON.stringify(data[key])}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                    <span className="bracket">{isOpen ? '}' : '}'}</span>
                </div>
            );
        } else {
            return <span className="json-value">{JSON.stringify(data)}</span>; // Return the primitive value directly
        }
    };

    return (
        <div style={{ marginLeft: '20px' }}>
            {renderData(data)}
        </div>
    );
};

export default JsonViewer;