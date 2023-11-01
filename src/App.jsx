import './App.css'
import MovieList from './MovieList';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
        <header className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Cleengflix</h1>
                <a href="#" className="text-gray-400 hover:text-white">Sign In</a>
            </div>
        </header>

        <main className="container mx-auto mt-12">
            <h2 className="text-2xl font-semibold mb-4">Popular on Cleengflix</h2>
            <MovieList />
        </main>

        <footer className="bg-gray-800 p-4">
            <div className="container mx-auto text-gray-500 text-sm text-center">
                &copy; 2023 Cleengflix | Made with ❤️ by Cleeng
            </div>
        </footer>
    </div>
  )
}

export default App
