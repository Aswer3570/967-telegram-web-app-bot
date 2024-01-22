import './Friends.scss'
import HatchingChickIcon from '../../assets/hatching_chick.png'
import LinkIcon from '../../assets/link.png'
import FriendsBlock from '../../components/FriendsBlock/FriendsBlock'

import { useNavigate } from 'react-router-dom'
import { useWebApp, BackButton } from '@vkruglikov/react-telegram-web-app'

function Friends() {
	const navigate = useNavigate()
	const webApp = useWebApp()

	const inviteFriendsButton = () => {
		webApp.openTelegramLink('https://t.me/nineHundredSixtySevenBot?start=ref')
		webApp.close()
	}

	return (
		<div className="friends__container">
			<div className="friends__header-container">
				<img src={HatchingChickIcon} className="hatching-chick__icon" alt="Hatching chick" />

				Your friends
			</div>

			<div className="friends__invite-container">
				<button className="friends__invite-button" onClick={() => inviteFriendsButton()}>
					<img src={LinkIcon} className="link-icon" alt="Link" />

					Invite a friend
				</button>

				<p className="friends__invite-description">
					For each invited friend, you increase the number of attempts without additional boosts
				</p>
			</div>

			<div className="friends__list-container">
				<p className="friends__list-title">
					Friends List
				</p>

				<div className="friends__list-block">

					{/* <p className="no-friends-message">
						No friends yet
					</p> */}

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

					<FriendsBlock
						avatar="https://cdn1.flamp.ru/f3b30ff2b400d9fe0b30efeb1d632b6c_300_300.jpg"
						name="Roman Dolmatov"
						description="+1000 boost for you"
						link="https://t.me/RomanDolmatov"
					/>

				</div>
			</div>

			<BackButton onClick={() => navigate('/')} />
		</div>
	)
}

export default Friends