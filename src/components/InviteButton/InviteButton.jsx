import './InviteButton.scss'
import LinkIcon from '../../assets/link.png'

function inviteButton({webApp}) {
	const inviteFriendsButton = () => {
		webApp.openTelegramLink('https://t.me/nineHundredSixtySevenBot?start=ref')
		webApp.close()
	}

	return (
		<div className="friends__invite-container">
			<button className="friends__invite-button" onClick={() => inviteFriendsButton()}>
				<img src={LinkIcon} className="link-icon" alt="Link" />

				Invite a friend
			</button>

			<p className="friends__invite-description">
				For each invited friend, you increase the number of attempts without additional boosts
			</p>
		</div>
	)
}

export default inviteButton