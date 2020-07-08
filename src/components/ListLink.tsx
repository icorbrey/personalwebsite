import React from 'react'
import { ListLinkProps } from 'types/Props'

import Link from 'components/Link'

const ListLink = ({ label, alt, link, spaces = 0 }: ListLinkProps) => (
	<span>
		&nbsp;* {label }:{' '.repeat(spaces) }
		<Link { ...{ alt, link } } />
		<br />
	</span>
)

export default ListLink
