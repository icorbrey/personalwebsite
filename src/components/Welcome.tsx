import React from 'react'
import Link from './Link'
import ListLink from './ListLink'

export default () => (
	<>
		<p>
			Welcome to Isaac Corbrey's website
			(<Link alt='Isaac Corbrey' link='https://isaaccorbrey.netlify.com' />)
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
			Type <span className='gruvbox-yellow'>help</span> to see available commands.
		</p>
		<br />
	</>
)

