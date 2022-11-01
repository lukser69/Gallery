import './App.css';
import { Gallery } from './pages/gallery/Gallery';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './Components/Navigation'

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Gallery />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</>
	);
}

export default App;
