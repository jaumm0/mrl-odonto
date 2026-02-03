
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 max-md:bottom-4 max-md:right-4 max-md:p-3 bg-[var(--color-bgwhats)] text-white p-4 rounded-full shadow-lg hover:brightness-110 transition-all duration-300 z-50 hover:scale-110 flex items-center justify-center cursor-pointer"
            aria-label="Conversar no WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsAppButton;
