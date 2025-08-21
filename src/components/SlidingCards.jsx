import React, {useState, useEffect} from 'react';

const SlidingCards = () => { 
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev === 0 ? 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div className="relative w-full h-60 overflow-hidden rounded-xl shadow-lg">
                
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 transition-transform duration-700 ${activeCard===0 ? "translate-x-0" : "-translate-x-full"}`}></div>

                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-400 to-red-600 transition-transform duration-700 ${activeCard===1 ? "translate-x-0" : "translate-x-full"}`}></div>
            </div>
        </>
    )
}

export default SlidingCards