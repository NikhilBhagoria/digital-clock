import React, { useState, useEffect } from 'react'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    // const [ampm, setAmpm] = useState(new Date().getHours() >= 12 ? 'PM' : 'AM');
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [day, setDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long' }));
    const [month, setMonth] = useState(new Date().toLocaleDateString('en-US', { month: 'long' }));
    const [year, setYear] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric' }));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setAmpm(new Date().getHours() >= 12 ? 'PM' : 'AM');
            setDate(new Date().toLocaleDateString());
            setDay(new Date().toLocaleDateString('en-US', { weekday: 'long' }));
            setMonth(new Date().toLocaleDateString('en-US', { month: 'long' }));
            setYear(new Date().toLocaleDateString('en-US', { year: 'numeric' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-1/3 h-1/3 text-white'>

                <div className='flex justify-center items-center'>
                    <div className=' text-4xl font-bold'>
                        <span id='time' className='text-8xl font-bold'>{time}</span>
                        {/* <span id='ampm' className='text-4xl font-bold'>{ampm}</span> */}
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 text-white '>
                    <div>
                        <span id='date' className='text-xl font-bold'>{date}</span>
                    </div>
                    <div>
                        <span id='day' className='text-xl font-bold'>{day}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalClock