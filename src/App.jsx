import { useEffect } from "react"

function App() {
	const webApp = window.Telegram.WebApp

	useEffect(() => {
		webApp.ready()
	}, [])

	console.log(webApp.version)
	console.log(webApp.platform)

	return (
		<>
			{ webApp.version }
			<br />
			{ webApp.platform }
		</>
	)
}

export default App
