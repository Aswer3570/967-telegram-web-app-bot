import './Button.scss'
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app'

function Button() {
	const [impactOccurred, ,] = useHapticFeedback()

	const clickButton = () => {
		impactOccurred('light')
	}

	return (
		<div className="button__container">
			<button className="button__block" onClick={() => clickButton()}>
				<div className="button__decoration-block">
					₿
				</div>
			</button>
		</div>
	)
}

export default Button