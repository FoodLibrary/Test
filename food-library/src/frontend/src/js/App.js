import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import React, {useEffect, useState} from 'react';
import './index.css';
import './css/TopBarStyle.css'

import TopBar from "./js/TopBar";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/api/foodlibrary')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    }, [])

    return (
        <div>
            <TopBar/>
            <h1> {message}</h1>
        </div>

    );
}

export default App;