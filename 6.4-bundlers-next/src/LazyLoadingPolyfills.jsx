"use client";
import React, { useState } from 'react'
import { useCookieState } from "@blacksheepcode/use-cookie-state"

export function Thing() {

    const [user, setUser, deleteUser] = useCookieState('user-1', 'foo-bar')
    const [serverCookie] = useCookieState('server-cookie', "default-value-for-server-cookie")

    const handleUpdateUser = () => {
        setUser(`${Math.random()}`)
    }

    const handleDeleteUser = () => {
        deleteUser()
    }

    return (
        <div>
            <p>Name: {user}</p>
            <p>Server cookie: {serverCookie}</p>
            <button onClick={handleUpdateUser}>Update User</button>
            <button onClick={handleDeleteUser}>Delete User</button>

            <button onClick={() => {
                fetch('/demos/responsive-cookies/req1').then(v => v.json()).then(v => console.log(v))
            }}>Server Fetch</button>
        </div>
    )
}

export function LazyLoadingPolyfills() {

    const [showThing, setShow] = useState(false);
    return <div>
        <button onClick={() => { setShow(true) }}>Click me</button>
        {showThing && <Thing />}
    </div>
}