import React from 'react'

interface LinkProps
{
	alt: string
	link: string
}

const Link = ({ link, alt }: LinkProps) => (
	<a href={ link } title={ alt }>
		{ link }
	</a>
)

export default Link
