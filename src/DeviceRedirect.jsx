import { useWebApp } from '@vkruglikov/react-telegram-web-app'

import NoSupport from './pages/NoSupport/NoSupport'

const DeviceRedirect = ({ children }) => {
	const webApp = useWebApp()

	if (webApp) {
		webApp.ready()
	}

	if (!webApp?.platform) {
		return null
	}

	// unknown и macos - удалить потом
	if (webApp?.platform !== 'ios' && webApp.platform !== 'android' && webApp.platform !== 'macos' && webApp.platform !== 'unknown') {
		return (
			<NoSupport />
		)
	}

	return (
		<>
			{ children }
		</>
	)
}

export default DeviceRedirect














// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useWebApp } from '@vkruglikov/react-telegram-web-app'

// const DeviceRedirect = ({ children }) => {
// 	const navigate = useNavigate()
// 	const webApp = useWebApp()

// 	useEffect(() => {
// 		// unknown и macos - удалить потом
// 		if (webApp.platform !== 'ios' && webApp.platform !== 'android' && webApp.platform !== 'macos' && webApp.platform !== 'unknown') {
// 			return navigate('/no-support')
// 		}
// 	}, [])

// 	return <>{ children }</>
// }

// export default DeviceRedirect