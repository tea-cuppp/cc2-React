import React, { useState } from "react";
import { useEffect } from "react";


export default function Day8() {
    const [msg, setmsg] = useState("Hello World?")

    useEffect(() => {
        setTimeout(() => {
            setmsg("Bye World");
        }, 2000)
    })
    return (
        <div><p>{msg}</p></div>
    )
}
