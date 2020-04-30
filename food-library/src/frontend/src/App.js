import React, {useEffect, useState} from "react";
import TopBar from "./js/TopBar";

function App() {
    const[message, setMessage] = useState("");

    useEffect(() => {
        fetch('/products')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            })
    }, [])

    return (
        <div>
            <TopBar/>
            <h1> {message} </h1>
        </div>
    )
}

export default App;