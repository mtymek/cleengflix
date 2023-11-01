import './App.css'
import MovieList from './components/MovieList';
import Header from "./components/Header.jsx";
import Cleeng from "./services/Cleeng";

function App() {

    Cleeng.isEntitled();

    return (
        <div className="flex flex-col h-screen justify-between">
            <Header/>

            <main className="container mx-auto mt-12">
                <h2 className="text-2xl font-semibold mb-4">Popular on Cleengflix</h2>
                <MovieList/>
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
