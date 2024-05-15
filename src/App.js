import logo from './logo.svg';
import './App.css';
import Car, { Car2 } from './Car';

function App() {
    const isLoggedIn = true;

    const isRaining = true;

    const speed = 50;

    return (
        <div className="App">
            {isLoggedIn ? 'welcome arun' : 'please login'}

            <div id="new_div_by_arun"></div>
            <Car color="red" isRaining={isRaining} speed={speed} />
            <Car2 color="green" isRaining={isRaining} />
        </div>
    );
}

export default App;
