import './BottomMenu.scss'
import HatchingChickIcon from '../../assets/hatching_chick.png'
import RocketIcon from '../../assets/rocket.png'
import LightningIcon from '../../assets/lightning.png'

import { Link } from "react-router-dom"

function BottomMenu() {
	return (
		<>
			<div className="tap-bot__container">
				<button className="tap-bot__block">
					Tap bot: <span className="tap-bot__toogle">Off</span>
				</button>

				<div className="counter__container">
					<img src={LightningIcon} alt="Star" className="star-icon"/>

					10,000
				</div>

				{/* <div className="counter__container">
					0:58:32
				</div> */}
			</div>

			<div className="bottom-menu__container">
				<Link to="/friends" className="bottom-menu__button">
					<img src={HatchingChickIcon} className="hatching-chick__icon" alt="Hatching chick" />

					Friends
				</Link>

				<Link to="/boost" className="bottom-menu__button">
					<img src={RocketIcon} className="rocket__icon" alt="Rocket" />

					Boost
				</Link>
			</div>
		</>
	)
}

export default BottomMenu