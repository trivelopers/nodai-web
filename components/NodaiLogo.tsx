
import React from 'react';

interface LogoProps {
    className?: string;
}

const NodaiLogo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500 h-full">
                <path d="M19.8242 16.8906L5.85938 3.51562" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                <path d="M19.8242 16.8906L5.85938 30.2656" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="34.1406" cy="16.8906" r="5.85938" fill="currentColor"/>
                <circle cx="5.85938" cy="3.51562" r="5.85938" fill="currentColor"/>
                <circle cx="5.85938" cy="30.2656" r="5.85938" fill="currentColor"/>
            </svg>
            <span className="text-3xl font-bold tracking-tighter text-current">nodai</span>
        </div>
    );
};

export default NodaiLogo;
