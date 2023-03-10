export default function NavBar() {
    return (
        <nav className="flex flex-col w-52 border-solid border-r-2 px-6 py-10 border-gray-600">
            <h2 className="text-xl font-semibold self-center">Username</h2>
            <div className="flex justify-evenly">
                <p>Icon</p>
                <p>Dashboard</p>
            </div>
            <div className="flex justify-between">
                <p>Icon</p>
                <p>AI Generation</p>
            </div>
            <div className="flex justify-between">
                <p>Icon</p>
                <p>Settings</p>
            </div>
            <div className="flex justify-between">
                <p>Icon</p>
                <p>Logout</p>
            </div>
        </nav>
    )
}