'use client'
import Login from "./login";
import Signup from "./signup";
import { useState } from "react";

export default function Splash() {
    const [currentForm, setCurrentForm] = useState<"login" | "signup">("login");

    interface Props {
        changeForm: () => void;
    }

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
                    currentForm === "login" ? <Login changeForm={changeForm}></Login> : <Signup changeForm={changeForm}></Signup>
                }
            </div>
        </main>
    )
}

