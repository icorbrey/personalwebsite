import React from 'react'
import { Gruvbox } from './Gruvbox'

export interface PromptProps
{
	success?: boolean,
	dir?: string,
}

export default ({ success = true, dir = '~' }: PromptProps) => (
	<span>
		<Gruvbox fg={ success ? 'green' : 'red' }>
			corbrey
		</Gruvbox>
		&nbsp;
		<Gruvbox fg='aqua'>{ dir }</Gruvbox>
		&nbsp;
	</span>
)
