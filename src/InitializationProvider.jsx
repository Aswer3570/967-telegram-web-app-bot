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