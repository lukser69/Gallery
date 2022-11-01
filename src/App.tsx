import './App.css';
import { Gallery } from './pages/gallery/Gallery';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './Components/Navigation'
import { Menu } from './pages/menu/Menu';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</>
	);
}

export default App;
