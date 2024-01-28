import './HashBlock.scss'
import SwapIcon from "../../assets/swap.svg?react"

function HashBlock({lastAttempt}) {
	return (
		<div>
			<div className="hash__container">
				<div className="hash__block">
					<span className="hash__title">
						Target address
					</span>

					<p className="hash__addres">
						12ib7dApVFvg82TXKycWBNpN8kFyiAN1dr
					</p>
				</div>

				<div className="hash__line-container">
					<span className="hash__line"></span>

					<SwapIcon className="swap-icon" />

					<span className="hash__line"></span>
				</div>

				<div className="hash__block">
					<p className="hash__addres hash__addres--red">
						{ lastAttempt }
					</p>
				</div>
			</div>

			<p className="hash__description">
				The found key will come in the bot&apos;s message
			</p>
		</div>
	)
}

export default HashBlock