// src/PdfEditor.js
import React, { useState } from 'react';
import { PDFViewer, Page, Text } from '@react-pdf/renderer';
import { PDFDocument } from 'pdf-lib';

function PdfEditor() {
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfData, setPdfData] = useState(null);
    const [editableText, setEditableText] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            const reader = new FileReader();
            reader.onload = async () => {
                const pdfDoc = await PDFDocument.load(reader.result);
                setPdfData(pdfDoc);
                const page = pdfDoc.getPage(0);
                const textContent = await page.getTextContent();
                setEditableText(textContent.items.map(item => item.str).join(' '));
            };
            reader.readAsArrayBuffer(file);
        } else {
            alert('Please upload a valid PDF file.');
        }
    };

    const handleEditTextChange = (event) => {
        setEditableText(event.target.value);
    };

    const handleEditPdf = async () => {
        if (pdfData) {
            const newPdf = await PDFDocument.create();
            const [page] = await newPdf.copyPages(pdfData, [0]);
            newPdf.addPage(page);
            const pdfBytes = await newPdf.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'edited.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div>
            <h2>PDF Editor</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {pdfData && (
                <>
                    <textarea
                        value={editableText}
                        onChange={handleEditTextChange}
                        rows="4"
                        cols="50"
                    />
                    <button onClick={handleEditPdf}>Edit and Download PDF</button>
                    <div style={{ height: '500px' }}>
                        <PDFViewer>
                            <Page size="A4">
                                <Text>{editableText}</Text>
                            </Page>
                        </PDFViewer>
                    </div>
                </>
            )}
        </div>
    );
}

export default PdfEditor;