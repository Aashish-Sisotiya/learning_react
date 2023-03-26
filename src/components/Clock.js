// import { useEffect, useState } from "react";

// function Clock() {

//     const [date, setDate] = useState(new Date());

//     function refreshClock() {
//         setDate(new Date());
//     }
//     useEffect(() => {
//         const timerId = setInterval(refreshClock, 1000);
//         return function cleanup() {
//             clearInterval(timerId);
//         };
//     }, []);


//     // let time = date.getHours() + " : " + date.getMinutes() + " : " + date.getMinutes();
//     return (
//         <>
//             <h1>{date.toLocaleTimeString()}</h1>

//         </>
//     )
// }

// export default Clock;


import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (time.getSeconds() === 0) {
            console.log("End of minute");
        }
    }, [time]);

    const formatNumber = (number) => {
        return number < 10 ? "0" + number : number;
    };

    return (
        <div>
            {formatNumber(time.getHours())}:{formatNumber(time.getMinutes())}:
            {formatNumber(time.getSeconds())}
        </div>
    );
}

export default Clock;
