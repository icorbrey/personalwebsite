import React from 'react'
import { Gruvbox } from './Gruvbox'

export interface PromptProps
{
	dir: string,
	success: boolean,
}

export default ({ success, dir }: PromptProps) => (
	<span>
		<Gruvbox fg={ success ? 'green' : 'red' }>
			corbrey
		</Gruvbox>
		&nbsp;
		<Gruvbox fg='aqua'>{ dir }</Gruvbox>
		&nbsp;
	</span>
)
