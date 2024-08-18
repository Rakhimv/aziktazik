
import './App.scss';
import { Routes, Route } from 'react-router-dom';


function App() {
    return (
       <Routes>
          <Route path="/azik" element={
        <div className="App">
            <header className="flex flex-col gap-[10px] items-center">
                <h1 className="text-center mt-[50px] text-[20px] font-mono text-white font-bold">Bot Azik</h1>
                <a className="text-white underline font-mono text-center" href="https://github.com/Rakhimv">GitHub</a>
            </header>
        </div>
        } />
          </Routes >
    );
}

export default App;