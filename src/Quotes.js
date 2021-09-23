import React, { useState, useEffect } from "react"

export default function Apartments() {

    const [data, setData] = useState([])
    

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(result => setData(result))
    }, [])

    const newdata = data[Math.floor(Math.random() * data.length)]

    return (
        <>
            <h1>Inspirational quotes</h1>
            <p>This is here incase you feel like life just is not going your way. Sometimes a quote can lift you off the ground and help you out. </p>
            <p><strong>WARNING:</strong>Pressing the darkmode resets the quotes</p>
            <hr />
            <h2>{newdata?.text} -{newdata?.author}</h2>
        </>
    );
}