import './Home.scss'
import BottomMenu from '../../components/BottomMenu/BottomMenu'
import Button from '../../components/Button/Button'
import HashBlock from '../../components/HashBlock/HashBlock'

function Home() {
	return (
		<div className="home">
			<HashBlock lastAttempt="1JF5AKVGZTt3GuyMruwjrXHjAvfKrRXVtW" />

			<Button />

			<BottomMenu />
		</div>
	)
}

export default Home