import './Boost.scss'
import Header from '../../components/Header/Header'
import FriendsBlock from '../../components/FriendsBlock/FriendsBlock'

import { useNavigate } from 'react-router-dom'
import { BackButton } from '@vkruglikov/react-telegram-web-app'

function Boost() {
	const navigate = useNavigate()

	function test() {
		console.log('test')
	}

	return (
		<div className="boost">
			<Header
				title="Get boost"
				counter="10,000"
				description="1 energy = 1 attempt"
				color="dark"
			/>

			<div className="boost-container">
				<div className="boost-list__container">
					<p className="boost-list__title">
						Onboarding
					</p>

					<div className="boost-list__wrapper">
						<FriendsBlock
							avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
							name="Tap bot"
							description="2.99 $"
							onClick={test()}
						/>

						<FriendsBlock
							avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
							name="Tap bot"
							description="2.99 $"
							onClick={test()}
						/>

						<FriendsBlock
							avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
							name="Tap bot"
							description="2.99 $"
							onClick={test()}
						/>

						<FriendsBlock
							avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
							name="Tap bot"
							description="2.99 $"
							onClick={test()}
						/>
					</div>

					<p className="boost-contact">
						For refund inquiries, please contact <a href="https://t.me/aswer3570" className="boost-contact__link">@aswer3570</a>
					</p>
				</div>
			</div>

			<BackButton onClick={() => navigate('/')} />
		</div>
	)
}

export default Boost