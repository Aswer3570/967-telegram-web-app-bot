import './Boost.scss'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '@vkruglikov/react-telegram-web-app'

import RocketIcon from '../../assets/rocket.png'
import FriendsBlock from '../../components/FriendsBlock/FriendsBlock'
import BottomSlider from '../../components/BottomSlider/BottomSlider'

function Boost() {
	const navigate = useNavigate()

	function test() {
		console.log('test')
	}

	return (
		<div className="boost__container">
			<div className="boost__header-container">
				<img src={RocketIcon} className="boost-icon" alt="Rocket" />

				Boost
			</div>

			<div className="onboarding__container">
				<p className="onboarding__title">
					Onboarding
				</p>

				<div className="onboarding__block">
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
			</div>

			<p className="boost__contact">
				For refund inquiries, please contact <a href="https://t.me/aswer3570" className="boost__contact-link">@aswer3570</a>
			</p>

			<BottomSlider
				img="https://em-content.zobj.net/source/apple/354/grinning-face_1f600.png"
				title="Tap bot ∞"
				description={`Clicks for you in the background\n\nIt is not subject to attempts and other restrictions\n\nIn case of success, it will notify and provide guidance on what to do next`}
				buttonTitle="Get it for $2,999"
			/>
			<BackButton onClick={() => navigate('/')} />
		</div>
	)
}

export default Boost