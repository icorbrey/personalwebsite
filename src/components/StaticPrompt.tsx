import React from 'react'

import Prompt from 'components/Prompt'

interface StaticPromptProps
{
	dir: string,
	value: string,
	success: boolean,
}

const StaticPrompt = ({ dir, success, value }: StaticPromptProps) => (
	<span>
		<Prompt { ...{ dir, success } } />
		<span>{ value }</span>
		<br />
	</span>
)

export default StaticPrompt
