import './Boost.scss'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '@vkruglikov/react-telegram-web-app'

import RocketIcon from '../../assets/rocket.png'

function Boost() {
	const navigate = useNavigate()

	return (
		<div className="boost__container">
			<div className="boost__header-container">
				<img src={RocketIcon} className="boost-icon" alt="Rocket" />

				Boost
			</div>

			<div className="">
				
			</div>

			<BackButton onClick={() => navigate('/')} />
		</div>
	)
}

export default Boost