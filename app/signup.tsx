export default function Signup() {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-gray-500">Welcome, please create an account.</p>
            <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Email</label>
                <input type="text" name="email" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="someone@gmail.com" />
            </div>
            <div>
                <label htmlFor="username" className="block text-gray-700 text-lg font-bold mb-2">Username</label>
                <input type="text" name="username" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="Username" />
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">Password</label>
                <input type="password" name="password" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="************" />
            </div>
            <div>
                <label htmlFor="cpassword" className="block text-gray-700 text-lg font-bold mb-2">Confirm Password</label>
                <input type="password" name="cpassword" className="shadow appearance-none border rounded text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder="************" />
            </div>
            <div className="flex gap-28 text-gray-700">
                <div className="flex gap-1">
                    <input type="checkbox" name="remember" className="accent-green-600 focus:accent-green-800" />
                    <label htmlFor="remember" className="">Remember me</label>
                </div>
            </div>
        </div>
    )
}