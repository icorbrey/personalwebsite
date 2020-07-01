import React from 'react'

interface LinkProps
{
	alt: string
	link: string
}

export default ({ link, alt }: LinkProps) =>
	<a href={ link } title={ alt }>{ link }</a>
