import React, { createRef, useState, RefObject } from 'react'
import Welcome from './Welcome'
import PromptLine from './PromptLine'
import TerminalWindow from './TerminalWindow'

export default () =>
{
	const [success] = useState(true)
	const [currentDir] = useState('~')
	const [inputRef] = useState(newInputRef())

	return (
		<TerminalWindow { ...{ inputRef } }>
			<Welcome />
			<PromptLine { ...{ success, currentDir, inputRef } } />
		</TerminalWindow>
	)
}

const newInputRef = (): RefObject<HTMLInputElement> =>
	createRef<HTMLInputElement>()
