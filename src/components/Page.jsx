import React from 'react'
import style from 'scss/components/page.module.scss'

import Container from 'components/Container'
import Navigation from 'components/Navigation'

export default function Page(props)
{
	return (
		<Container>
			<div className={ style.split }>
				<Navigation active={ props.active } className={ style.left } />
				<div className={ style.right }>
					<h1>{ props.title }</h1>
					{ props.children }
				</div>
			</div>
		</Container>
	)
}
