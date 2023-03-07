import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface LoginProps {
    changeForm: () => void;
}

export default function Login({ changeForm }: LoginProps) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/loginUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/dashboard');
                return;
            }

            const data = await res.json();
            console.log(data);
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <p className="text-gray-500">Welcome Back, please login to your account.</p>
            <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Email</label>
                <input type="text" onChange={handleChange} value={formData.email} name="email" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="someone@gmail.com" />
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">Password</label>
                <input type="password" onChange={handleChange} value={formData.password} name="password" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="************" />
            </div>
            <div className="flex gap-28 text-gray-700">
                <div className="flex gap-1">
                    <input type="checkbox" name="remember" className="accent-green-600 focus:accent-green-800" />
                    <label htmlFor="remember" className="">Remember me</label>
                </div>
                <a href="#" className="underline">Forgot Password?</a>
            </div>
            <div className="flex gap-28">
                <button type="submit" className="text-white bg-green-600 hover:bg-green-800 font-bold py-2 px-4 w-1/5 rounded-lg">Login</button>
                <button className="text-green-600 border-2 border-green-600 hover:bg-gray-100 font-bold py-2 px-4 w-1/5 rounded-lg" onClick={changeForm}>Sign Up</button>
            </div>
        </form>
    )
}