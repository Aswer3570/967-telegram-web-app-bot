import './NoSupport.scss'
import constructionIcon from '../../assets/construction.png'
import QRCodeIcon from "../../assets/qrcode.svg?react"

function NoSupport() {
	return (
		<div className="no-support__container">
			<div className="no-support__wrapper">
				<img src={constructionIcon} className="construction-icon" alt="Construction" />

				<p className="no-support__title">
					Desktop not supported
				</p>

				<p className="no-support__description">
					Use a mobile device
				</p>

				<div className="qr-code__container">
					<QRCodeIcon className="qr-code__icon" />
				</div>
			</div>
		</div>
	)
}

export default NoSupport