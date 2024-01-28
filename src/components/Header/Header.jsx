import './Header.scss'
import HatchingChickIcon from '../../assets/hatching_chick.png'
import LightningIcon from '../../assets/lightning.png'

function Header({title, counter, description, color}) {
	return (
		<header className={`header-container ${ color === 'light' ? 'header-container--light' : 'header-container--dark'}`}>
			<p className="header-title">
				{ title }
			</p>

			<div className="header-counter">
				{
					color === 'light' ?
						<img src={HatchingChickIcon} className="header-counter__img" alt="Hatching Chick" />
						:
						<img src={LightningIcon} className="header-counter__img" alt="Lightning" />
				}

				{ counter }
			</div>

			<p className="header-description">
				{ description }
			</p>
		</header>
	)
}

export default Header