'use client'
import Login from "./login";
import Signup from "./signup";
import { useState } from "react";

export default function Splash() {
    const [currentForm, setCurrentForm] = useState<"login" | "signup">("login");

    const changeForm = () => {
        if (currentForm === "login") {
            setCurrentForm("signup");
        } else {
            setCurrentForm("login");
        }
    }
    return (
        <main className="flex flex-col justify-center w-2/5 px-20 py-10">
            <div className="flex text-4xl leading-normal h-16 gap-3 text-green-800">
                <img src="ai-82.svg" alt="image description" />
                <h1 className="font-semibold align-baseline">AI Todo-List</h1>
            </div>
            <div className="mt-14">
                <h2 className="text-3xl text-green-800 font-semibold">Artificial Intelligence giving you a schedule so you don't have to</h2>
                {
                    currentForm === "login" ? <Login></Login> : <Signup></Signup>
                }
                <div className="flex flex-col gap-3 mt-4">
                    {
                        currentForm === "login" ? (
                            <div className="flex gap-28">
                                <button className="text-white bg-green-600 hover:bg-green-800 font-bold py-2 px-4 w-1/5 rounded-lg">Login</button>
                                <button className="text-green-600 border-2 border-green-600 hover:bg-gray-100 font-bold py-2 px-4 w-1/5 rounded-lg" onClick={changeForm}>Sign Up</button>
                            </div>
                        ) : (
                            <div className="flex gap-28">
                                <button className="text-green-600 border-2 border-green-600 hover:bg-gray-100 font-bold py-2 px-4 w-1/5 rounded-lg" onClick={changeForm}>Login</button>
                                <button className="text-white bg-green-600 hover:bg-green-800 font-bold py-2 px-4 w-1/5 rounded-lg">Sign Up</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    )
}

