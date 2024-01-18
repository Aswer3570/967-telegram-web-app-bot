import './FriendsBlock.scss'
import ArrowIcon from "../../assets/arrow.svg?react"

import { Link } from "react-router-dom"

const nameInitials = (name) => {
	const words = name.split(' ')

	if (words.length > 1) {
		const initials = words.map(word => word[0])

		return initials.slice(0, 2).join('')
	}
	else {
		const word = words[0]

		return word[0].toUpperCase() + word[1].toUpperCase()
	}
}

function FriendsBlock({avatar, name, link}) {
	const shortName = nameInitials(name)

	return (
		<Link to={link} className="friends-block__container">
			<div className="friends-block__avatar-container">
				{
					avatar?.length > 0 ?
						<img src={avatar} className="friends-block__avatar-img" alt="Avatar" />
						:
						<div className="friends-block__avatar-text">
							{ shortName }
						</div>
				}
			</div>

			<div className="friends-block__name-container">
				<p className="friends-block__name-text">
					{ name }
				</p>

				<p className="friends-block__boost-text">
					+1000 boost for you
				</p>
			</div>

			<div className="friends-block__arrow-container">
				<ArrowIcon className="arrow-icon" />
			</div>
		</Link>
	)
}

export default FriendsBlock