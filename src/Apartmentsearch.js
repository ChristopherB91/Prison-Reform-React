import React, { useEffect, useState} from "react";

export default function Interview() {

    let [data, setData] = useState([])

    useEffect(() =>{
        fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=4e16c244&app_key=2453fbaf0631f03cb9ec9dd46de45d5e&what=felony%20friendly`)
        .then(response => response.json())
        .then(result => setData(result))
    }, [])

    return (
        <>
            <p>Job Search</p>
            {data.map(item => <p key={item.id}>{item.title} : {item.description} | {item.url}</p>)}
        </>
    )
}