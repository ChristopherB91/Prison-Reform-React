import React, { useState, useEffect, useContext} from "react"

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
            <p><strong>WARNING:</strong>Pressing the darkmode resets the quotes</p>
            <hr />
            <h2>{newdata?.text} -{newdata?.author}</h2>
        </>
    );
}