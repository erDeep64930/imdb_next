"use client";
import { useEffect } from 'react'

const error = ({ error, reset }) => {
    useEffect(() => { 
        console.log(error);
    }, [error])
    return (
        <div>
            <h1 className="text-center mt-10">Something went wrong , please try again later.</h1>
            <button className="hover:text-amber-700" onClick={()=>reset()}>Try Again</button>
        </div>
    )
}

export default error