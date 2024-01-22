import './BottomSlider.scss'
import CloseIcon from "../../assets/close.svg?react"

function BottomSlider({img, title, description, buttonTitle}) {
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

			<button className="bottom-slider__button">
				{ buttonTitle }
			</button>
		</div>
	)
}

export default BottomSlider