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
























// import { useEffect } from "react"
// import { Routes, Route } from 'react-router-dom'
// import { useWebApp } from '@vkruglikov/react-telegram-web-app'

// import Home from './pages/Home/Home'
// import Boost from './pages/Boost/Boost'
// import Friends from './pages/Friends/Friends'
// import NoSupport from './pages/NoSupport/NoSupport'
// import DeviceRedirect from './DeviceRedirect'

// function App() {
// 	const webApp = useWebApp()

// 	useEffect(() => {
// 		webApp.ready()
// 	}, [])

// 	console.log(webApp.version)
// 	console.log(webApp.platform)

// 	return (
// 		<Routes>
// 			<Route
// 				path="/"
// 				element={
// 					<DeviceRedirect>
// 						<Home />
// 					</DeviceRedirect>
// 				}
// 			/>

// 			<Route
// 				path="/boost"
// 				element={
// 					<DeviceRedirect>
// 						<Boost />
// 					</DeviceRedirect>
// 				}
// 			/>

// 			<Route
// 				path="/friends"
// 				element={
// 					<DeviceRedirect>
// 						<Friends />
// 					</DeviceRedirect>
// 				}
// 			/>

// 			<Route
// 				path="/no-support"
// 				element={
// 					<DeviceRedirect>
// 						<NoSupport />
// 					</DeviceRedirect>
// 				}
// 			/>
// 		</Routes>
// 	)
// }

// export default App
