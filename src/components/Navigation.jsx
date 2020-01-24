import { NavLink } from 'react-router-dom'
import React from 'react'
import style from 'scss/components/navigation.module.scss'

export default function Navigation(props)
{
	const styles = [style.navigation]

	if (props.className)
		styles.push(props.className)

	return (
		<div className={ styles.join(' ') }>
			<NavLink exact to='/'>
				<h1>Isaac Corbrey</h1>
			</NavLink>
			<div className={ style.spacer }></div>
			<NavLink activeClassName={ style.active } to='/experience'>
				<h2>Experience</h2>
			</NavLink>
			<NavLink activeClassName={ style.active } to='/portfolio'>
				<h2>Code Portfolio</h2>
			</NavLink>
			<NavLink activeClassName={ style.active } to='/interests'>
				<h2>Interests</h2>
			</NavLink>
			<NavLink activeClassName={ style.active } to='/contact'>
				<h2>Contact</h2>
			</NavLink>
		</div>
	)
}
