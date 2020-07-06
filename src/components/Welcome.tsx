import React from 'react'
import Link from 'components/Link'
import ListLink from 'components/ListLink'

export default function Welcome()
{
	return (
		<>
			<p>
				Welcome to Isaac Corbrey's website
			(<Link alt='Isaac Corbrey' link='https://www.isaaccorbrey.com' />)
		</p>
			<br />
			<p>
				<ListLink
					spaces={ 2 }
					label='LinkedIn'
					link='https://www.linkedin.com/in/icorbrey'
					alt='/in/icorbrey on LinkedIn' />
				<ListLink
					spaces={ 4 }
					label='GitHub'
					link='https://www.github.com/icorbrey'
					alt='@icorbrey on GitHub' />
				<ListLink
					spaces={ 3 }
					label='Twitter'
					link='https://www.twitter.com/icorbrey'
					alt='@icorbrey on Twitter' />
			</p>
			<br />
			<p>
				Please note that this site is still under construction, and may not be fully<br />
			functional yet. See <Link alt='icorbrey/personalwebsite on GitHub' link='https://www.github.com/icorbrey/personalwebsite' /> for more<br />
			details.
		</p>
		</>
	)
}
