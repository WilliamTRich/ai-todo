import { useState } from "react";

interface SignupProps {
    changeForm: () => void;
}

export default function Signup({ changeForm }: SignupProps) {

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        cpassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                //Handle success
            }

            const data = await res.json();
            console.log(data);
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <p className="text-gray-500">Welcome, please create an account.</p>
            <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Email</label>
                <input type="text" value={formData.email} onChange={handleChange} name="email" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="someone@gmail.com" />
            </div>
            <div>
                <label htmlFor="username" className="block text-gray-700 text-lg font-bold mb-2">Username</label>
                <input type="text" value={formData.username} onChange={handleChange} name="username" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="Username" />
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">Password</label>
                <input type="password" value={formData.password} onChange={handleChange} name="password" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="************" />
            </div>
            <div>
                <label htmlFor="cpassword" className="block text-gray-700 text-lg font-bold mb-2">Confirm Password</label>
                <input type="password" value={formData.cpassword} onChange={handleChange} name="cpassword" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="************" />
            </div>
            <div className="flex gap-28 text-gray-700">
                <div className="flex gap-1">
                    <input type="checkbox" name="remember" className="accent-green-600 focus:accent-green-800" />
                    <label htmlFor="remember" className="">Remember me</label>
                </div>
            </div>
            <div className="flex gap-28">
                <button className="text-green-600 border-2 border-green-600 hover:bg-gray-100 font-bold py-2 px-4 w-1/5 rounded-lg" onClick={changeForm}>Login</button>
                <button className="text-white bg-green-600 hover:bg-green-800 font-bold py-2 px-4 w-1/5 rounded-lg" type="submit">Sign Up</button>
            </div>
        </form>
    )
}