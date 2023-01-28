export default function Login() {
    return (
        <main className="flex flex-col justify-center w-2/5 px-20 py-10">
            <div className="flex text-4xl leading-normal h-16 gap-3 text-green-800">
                <img src="ai-82.svg" alt="image description" />
                <h1 className="font-semibold align-baseline">AI Todo-List</h1>
            </div>
            <div className="mt-14">
                <h2 className="text-3xl text-green-800 font-semibold">Artificial Intelligence giving you a schedule so you don't have to</h2>
                <div className="flex flex-col gap-3 mt-4">
                    <p className="text-gray-500">Welcome Back, Please login to your account.</p>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Email</label>
                        <input type="text" name="email" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="someone@gmail.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">Password</label>
                        <input type="password" name="password" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="************" />
                    </div>
                    <div className="flex gap-28 text-gray-700">
                        <div className="flex gap-1">
                            <input type="checkbox" name="remember" className="accent-green-600 focus:accent-green-800" />
                            <label htmlFor="remember" className="">Remember me</label>
                        </div>
                        <a href="#" className="underline">Forgot Password?</a>
                    </div>
                    <div className="flex gap-28">
                        <button className="text-white bg-green-600 hover:bg-green-800 font-bold py-2 px-4 w-1/5 rounded-lg">Login</button>
                        <button className="text-green-600 border-2 border-green-600 hover:bg-gray-100 font-bold py-2 px-4 w-1/5 rounded-lg">Sign Up</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

