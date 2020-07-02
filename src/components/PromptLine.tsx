import React, { KeyboardEvent, useState } from 'react'
import InputRef from '../types/InputRef'
import ListenerCollection from '../types/ListenerCollection'
import { DisplayHistoryRecorder } from '../types/DisplayHistory'
import { InputHistory, InputHistoryRecorder } from '../types/InputHistory'

import Prompt from './Prompt'

interface PromptLineProps
{
	success?: boolean
	inputRef: InputRef
	currentDir?: string
	inputHistory: InputHistory
	addToInputHistory: InputHistoryRecorder
	addToDisplayHistory: DisplayHistoryRecorder
}

export default ({ success = true, inputRef, currentDir = '~', inputHistory, addToInputHistory, addToDisplayHistory }: PromptLineProps) =>
{
	const [inputHistoryIndex, setInputHistoryIndex] = useState(-1)

	const captureInput = (event: KeyboardEvent) =>
	{
		const listeners: ListenerCollection = {
			'Enter': () =>
			{
				const value = inputRef?.current?.value
				addToDisplayHistory(generatePromptEntry(success, currentDir, value))
				if (value && doesNotMatchPreviousCommand(value, inputHistory))
					addToInputHistory(value)
				setInputValue(inputRef, '')
				setInputHistoryIndex(-1)
			},
			'ArrowUp': () =>
			{
				const value = Math.min(inputHistoryIndex + 1, inputHistory.length - 1)
				setInputHistoryIndex(value)
				setInputValue(inputRef, inputHistory[value])
			},
			'ArrowDown': () =>
			{
				const value = Math.max(inputHistoryIndex - 1, -1)
				setInputHistoryIndex(value)
				setInputValue(inputRef, inputHistory[value])
			}
		}

		if (listeners[event.key])
		{
			event.preventDefault()
			listeners[event.key]()
		}

		scrollToBottom()
	}

	return (
		<span className='prompt-line'>
			<Prompt { ...{ success, dir: currentDir } } />
			<input
				autoFocus
				ref={ inputRef }
				className='prompt-input'
				onKeyDown={ captureInput } />
		</span>
	)
}

const scrollToBottom = () => window.scrollTo(0,
	document.body.scrollHeight
	|| document.documentElement.scrollHeight
)

const setInputValue = (inputRef: InputRef, value: string | undefined) =>
{
	if (inputRef && inputRef.current)
		inputRef.current.value = value || ''
}

const generatePromptEntry = (success: boolean, dir: string, value: string | undefined) => (
	<span>
		<Prompt { ...{ success, dir } } />{ value }
	</span>
)

const doesNotMatchPreviousCommand = (value: string, inputHistory: InputHistory) =>
	value !== inputHistory[0]

