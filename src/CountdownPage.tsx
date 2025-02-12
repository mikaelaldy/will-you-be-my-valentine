// src/CountdownPage.tsx
"use client";

import { useState, useEffect } from "react";


import './CountdownPage.css'; // Import CSS for countdown styles

const targetDateJakarta = new Date();
targetDateJakarta.setMonth(1); // February (Month is 0-indexed, so 1 is Feb)
targetDateJakarta.setDate(14);
targetDateJakarta.setHours(0, 0, 0, 0); // Set time to midnight Jakarta Time

function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDateJakarta.getTime() - now;

    if (difference <= 0) {
        return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { total: difference, days, hours, minutes, seconds };
}

export default function CountdownPage() {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const [countdownFinished, setCountdownFinished] = useState(false);

    useEffect(() => {
        if (countdownFinished) return;

        const interval = setInterval(() => {
            const remainingTime = calculateTimeRemaining();
            setTimeRemaining(remainingTime);
            if (remainingTime.total <= 0) {
                clearInterval(interval);
                setCountdownFinished(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countdownFinished]);

    return (
        <div className="flex h-screen bg-gradient-to-b from-pink-50 to-rose-100 flex-col items-center justify-center p-4 relative">
            <div className="heart-bg absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true"></div>
            {!countdownFinished ? (
                <div className="text-center z-10 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                    <h1 className="my-4 text-3xl font-semibold text-rose-700">Secret Countdown</h1>
                    <div className="flex justify-center mb-4">
                        <div className="countdown-item">
                            <div className="text-2xl font-semibold text-rose-800">{timeRemaining.days}</div>
                            <div className="text-sm text-rose-600 font-medium">Days</div>
                        </div>
                        <div className="countdown-item">
                            <div className="text-2xl font-semibold text-rose-800">{timeRemaining.hours}</div>
                            <div className="text-sm text-rose-600 font-medium">Hours</div>
                        </div>
                        <div className="countdown-item">
                            <div className="text-2xl font-semibold text-rose-800">{timeRemaining.minutes}</div>
                            <div className="text-sm text-rose-600 font-medium">Minutes</div>
                        </div>
                        <div className="countdown-item">
                            <div className="text-2xl font-semibold text-rose-800">{timeRemaining.seconds}</div>
                            <div className="text-sm text-rose-600 font-medium">Seconds</div>
                        </div>
                    </div>
                    <p className="text-rose-700 italic text-lg">Something special is coming...</p>
                </div>
            ) : (
                <div className="text-center z-10 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                    <p className="text-2xl font-semibold text-rose-700 mb-4">The waiting is finished, now reveal the secret</p>
                    <a href="https://valentine.mikascend.xyz" target="_blank" rel="noopener noreferrer">
                        <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-6 rounded-full transition duration-200">
                            Visit now ❤️
                        </button>
                    </a>
                </div>
            )}
        </div>
    );
}