import { Link } from 'react-router-dom'
import React from 'react'
import style from 'scss/views/home.module.scss'
import image from 'img/face.png'

import Centered from 'components/Centered'

export default function Home(props)
{
	return (
		<Centered>
			<div className={ style.split }>
				<img className={ style.left }
					src={ image }
					alt='Isaac Corbrey' />
				<div className={ style.right }>
					<Link to='/'>
						<h1>Isaac Corbrey</h1>
					</Link>
					<div className={ style.spacer }></div>
					<Link to='/experience'>
						<h2>Experience</h2>
					</Link>
					<Link to='/portfolio'>
						<h2>Code Portfolio</h2>
					</Link>
					<Link to='/interests'>
						<h2>Interests</h2>
					</Link>
					<Link to='/contact'>
						<h2>Contact</h2>
					</Link>
				</div>
			</div>
		</Centered>
	)
}
