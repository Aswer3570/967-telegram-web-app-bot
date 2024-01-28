import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Boost from './pages/Boost/Boost'
import Friends from './pages/Friends/Friends'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/boost" element={<Boost /> } />

			<Route path="/friends" element={<Friends /> } />
		</Routes>
	)
}

export default App