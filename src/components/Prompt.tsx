import React from 'react'
import Gruvbox from 'components/Gruvbox'

interface PromptProps
{
	dir: string,
	success: boolean,
}

export default function Prompt({ success, dir }: PromptProps)
{
	return (
		<span>
			<Gruvbox fg={ success ? 'green' : 'red' }>
				corbrey
		</Gruvbox>
		&nbsp;
			<Gruvbox fg='aqua'>
				{ dir }
			</Gruvbox>
		&nbsp;
		</span>
	)
}
