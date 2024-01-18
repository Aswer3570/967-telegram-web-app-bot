import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWebApp } from '@vkruglikov/react-telegram-web-app'

const DeviceRedirect = ({ children }) => {
	const navigate = useNavigate()
	const webApp = useWebApp()

	useEffect(() => {
		// unknown и macos - удалить потом
		if (webApp.platform !== 'ios' && webApp.platform !== 'android') {
			return navigate('/no-support')
		}
	}, [])

	return <>{ children }</>
}

export default DeviceRedirect