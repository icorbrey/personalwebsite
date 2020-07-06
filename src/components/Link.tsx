import React from 'react'

interface LinkProps
{
	alt: string
	link: string
}

export default function Link({ link, alt }: LinkProps)
{
	return (
		<a href={ link } title={ alt }>
			{ link }
		</a>
	)
}
