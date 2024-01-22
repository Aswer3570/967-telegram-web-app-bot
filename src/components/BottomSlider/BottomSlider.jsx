import './BottomSlider.scss'
import CloseIcon from "../../assets/close.svg?react"
import { useWebApp } from '@vkruglikov/react-telegram-web-app'

function BottomSlider({img, title, description, buttonTitle}) {
	const webApp = useWebApp()

	function test() {
		webApp.openTelegramLink('https://t.me./wallet?startattach=wpay_order-orderId__8838532657153')
	}

	return (
		<div className="bottom-slider__container">
			<div className="bottom-slider__close-container">
				<button className="bottom-slider__close-button">
					<CloseIcon className="close-icon" />
				</button>
			</div>

			<img src={img} className="bottom-slider__img" alt="Logo" />

			<p className="bottom-slider__title">
				{ title }
			</p>

			<p className="bottom-slider__description">
				{ description }
			</p>

			<button className="bottom-slider__button" onClick={() => test()}>
				{ buttonTitle }
			</button>
		</div>
	)
}

export default BottomSlider