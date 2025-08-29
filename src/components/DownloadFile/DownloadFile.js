import React, { useState, useEffect } from "react";
import "./DownloadFile.scss"; // Import SCSS file

const DownloadFile = ({ filePath, fileName, children }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (showOverlay) {
            // prevent background scroll
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup on unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showOverlay]);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowOverlay(false);
    };

    return (
        <>
            {/* Trigger button */}
            <button
                className="documentDownloadBtn"
                onClick={() => {
                    console.log("Clicked, showing overlay...");
                    setShowOverlay(true);
                }}
            >
                {children || "Download"}
            </button>

            {/* Overlay Confirmation Modal */}
            {showOverlay && (
                <div className={`downloadOverlay ${showOverlay ? "openOverlay" : ""}`}>
                    <div className="modal123">
                        <h2>
                            You are about to download:
                            <br />
                            <span className="file-name">{fileName}</span>
                        </h2>
                        <div className="actions">
                            <button className="btn yes" onClick={handleDownload}>
                                Yes
                            </button>
                            <button className="btn no" onClick={() => setShowOverlay(false)}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DownloadFile;
