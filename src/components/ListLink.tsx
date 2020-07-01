import React from 'react'
import Link from './Link'

interface ListLinkProps
{
	alt: string
	link: string
	label: string
	spaces: number
}

export default ({ label, alt, link, spaces = 0 }: ListLinkProps) => (
	<span>
		&nbsp;* { label }:{ ' '.repeat(spaces) }
		<Link { ...{ alt, link } } />
		<br />
	</span>
)
