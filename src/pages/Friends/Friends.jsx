import './Friends.scss'
import FriendsBlock from '../../components/FriendsBlock/FriendsBlock'
import Header from '../../components/Header/Header'
import InviteButton from '../../components/InviteButton/InviteButton'

import { useNavigate } from 'react-router-dom'
import { useWebApp, BackButton } from '@vkruglikov/react-telegram-web-app'

function Friends() {
	const navigate = useNavigate()
	const webApp = useWebApp()

	return (
		<div className="friends">
			<Header
				title="My friends"
				counter="10"
				description="1 friend = 1000 energy"
				color="light"
			/>

			<div className="friends-container">
				<InviteButton
					webApp={webApp}
				/>

				<div className="friends-list__container">
					<p className="friends-list__title">
						Friends List
					</p>

					<div className="friends-list__wrapper">
						<FriendsBlock
							avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
							name="Roman Dolmatov"
							description="+1000 boost for you"
							link="https://t.me/RomanDolmatov"
						/>

						<FriendsBlock
							avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
							name="Roman Dolmatov"
							description="+1000 boost for you"
							link="https://t.me/RomanDolmatov"
						/>

						<FriendsBlock
							avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
							name="Roman Dolmatov"
							description="+1000 boost for you"
							link="https://t.me/RomanDolmatov"
						/>

						<FriendsBlock
							avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
							name="Roman Dolmatov"
							description="+1000 boost for you"
							link="https://t.me/RomanDolmatov"
						/>

						<FriendsBlock
							avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
							name="Roman Dolmatov"
							description="+1000 boost for you"
							link="https://t.me/RomanDolmatov"
						/>

						{/* <p className="no-friends-message">
							No friends yet
						</p> */}
					</div>
				</div>

				<BackButton onClick={() => navigate('/')} />
			</div>
		</div>
	)
}

export default Friends