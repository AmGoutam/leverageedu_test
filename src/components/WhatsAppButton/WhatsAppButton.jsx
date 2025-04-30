import React from 'react';
import "./WhatsAppButton.css"
const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919999999999" // Replace with your number
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                alt="Chat on WhatsApp"
                className="whatsapp-icon"
            />
            <span className="whatsapp-tooltip">Chat with Expert</span>
        </a>
    );
};

export default WhatsAppButton;
