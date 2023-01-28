import Login from "./login";

export default function Home() {
  return (
    <main className="flex h-screen bg-gray-50">
      <Login></Login>
      <div className="flex w-3/5 border-l-2 border-black/60 bg-amber-100 justify-center items-center">
        <img src="artificial-intelligence-network.svg" className="object-scale-down w-3/5" alt="Splash screen" />
      </div>
    </main>
  )
}
