import React from 'react'
import style from 'scss/components/container.module.scss'

export default function Container(props)
{
	const styles = [style.outer]

	if (props.className)
		styles.push(props.className)

	if ((props.fill === undefined && props.nofill === undefined) || (props.fill && !props.nofill))
		styles.push(style.fill)

	return (
		<div className={ styles.join(' ') }>
			<div className={ style.inner }>
				{ props.children }
			</div>
		</div>
	)
}
