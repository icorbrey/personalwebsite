import React from 'react'
import { LinkProps } from 'types/Props'

const Link = ({ link, alt }: LinkProps) => (
	<a href={ link } title={ alt }>
		{ link }
	</a>
)

export default Link
