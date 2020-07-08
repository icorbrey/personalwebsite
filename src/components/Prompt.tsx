import React from 'react'
import { PromptProps } from 'types/Props'

import Gruvbox from 'components/Gruvbox'

const Prompt = ({ success, dir }: PromptProps) => (
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

export default Prompt
