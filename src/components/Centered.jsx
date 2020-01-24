import React from 'react'
import style from 'scss/components/centered.module.scss'

export default function Centered(props)
{
	const styles = [style.outer]

	if (props.className)
		styles.push(props.className)

	return (
		<div className={ styles.join(' ') }>
			<div className={ style.inner }>
				{ props.children }
			</div>
		</div>
	)
}
