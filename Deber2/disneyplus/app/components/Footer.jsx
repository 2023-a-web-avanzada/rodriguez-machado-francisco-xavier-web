import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [visitorsCount, setVisitorsCount] = useState(0);
    const [moviesWatchedCount, setMoviesWatchedCount] = useState(0);

    useEffect(() => {
        setVisitorsCount((prevCount) => prevCount + 1);
    }, []);

    const incrementMoviesWatchedCount = () => {
        setMoviesWatchedCount((prevCount) => prevCount + 1);
    };

    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <p>Visitors: {visitorsCount}</p>
                <p>Movies Watched: {moviesWatchedCount}</p>
                <button
                    onClick={incrementMoviesWatchedCount}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                    Watched
                </button>
            </div>
        </footer>
    );
};

export default Footer;
