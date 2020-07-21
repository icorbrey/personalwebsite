import React from 'react'
import { StaticPromptProps } from 'types/Props'

import Prompt from 'components/Prompt'

const StaticPrompt = ({ dir, success, value }: StaticPromptProps) => (
	<span>
		<Prompt { ...{ dir, success } } />
		<span>{ value }</span>
		<br />
	</span>
)

export default StaticPrompt
