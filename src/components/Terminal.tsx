import React, { createRef, useState } from 'react'
import { InputHistory, InputHistoryEntry } from '../types/InputHistory'
import { DisplayHistory, DisplayHistoryEntry } from '../types/DisplayHistory'

import Welcome from './Welcome'
import PromptLine from './PromptLine'
import TerminalWindow from './TerminalWindow'
import InputRef from '../types/InputRef'
import Prompt from './Prompt'
import ListenerCollection from '../types/ListenerCollection'

export default () =>
{
	const [success] = useState(true)
	const [currentDir] = useState('~')
	const [input] = useState(createRef<HTMLInputElement>())
	const [inputHistoryIndex, setInputHistoryIndex] = useState(-1)
	const [inputHistory, setInputHistory] = useState<InputHistory>([])
	const [displayHistory, setDisplayHistory] = useState<DisplayHistory>([<Welcome />])

	const addToInputHistory = (entry: InputHistoryEntry) =>
		setInputHistory([entry, ...inputHistory])

	const addToDisplayHistory = (entry: DisplayHistoryEntry) =>
		setDisplayHistory([...displayHistory, entry])

	const offsetInputHistoryIndex = (index: number) =>
		Math.min(Math.max(inputHistoryIndex + index, -1), inputHistory.length - 1)

	const addValueToInputHistory = (value: string | undefined) =>
	{
		if (value && value !== inputHistory[0])
			addToInputHistory(value)
	}

	const addPromptToDisplayHistory = (value: string | undefined) =>
	{
		addToDisplayHistory(
			<span>
				<Prompt { ...{
					success,
					dir: currentDir
				} } />{ value }
			</span>
		)
	}

	const displayEntries = displayHistory.map((entry, key) => (
		<span { ...{ key } }>
			{ entry }
			<br />
		</span>
	))

	const onMouseUp = () =>
		isTextSelected() || focusInput(input)

	const keyDownListeners: ListenerCollection = {
		'Enter': () =>
		{
			const text = input?.current?.value
			addPromptToDisplayHistory(text)
			addValueToInputHistory(text)
			setInputValue(input)
			setInputHistoryIndex(-1)
		},
		'ArrowUp': () =>
		{
			const index = offsetInputHistoryIndex(1)
			setInputHistoryIndex(index)
			setInputValue(input, inputHistory[index])
		},
		'ArrowDown': () =>
		{
			const index = offsetInputHistoryIndex(-1)
			setInputHistoryIndex(index)
			setInputValue(input, inputHistory[index])
		}
	}

	return (
		<TerminalWindow { ...{ onMouseUp } }>
			{ displayEntries }
			<PromptLine { ...{
				input,
				success,
				currentDir,
				keyDownListeners
			} } />
		</TerminalWindow>
	)
}

const isTextSelected = () =>
	window?.getSelection()?.toString()

const focusInput = (input: InputRef) =>
	input?.current?.focus()

const setInputValue = (input: InputRef, value: string | undefined = '') =>
{
	if (input && input.current)
	{
		input.current.value = value || ''
	}
}

