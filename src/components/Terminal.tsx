import InputRef from 'types/InputRef'
import React, { createRef, useState } from 'react'
import { InputHistory, InputHistoryEntry } from 'types/InputHistory'
import { DisplayHistory, DisplayHistoryEntry } from 'types/DisplayHistory'

import Prompt from 'components/Prompt'
import Welcome from 'components/Welcome'
import PromptLine from 'components/PromptLine'
import TerminalWindow from 'components/TerminalWindow'

export default function Terminal()
{
	const [success] = useState(true)
	const [currentDir] = useState('~')
	const [input] = useState<InputRef>(createRef())
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

	const onFocusTerminal = () =>
		isTextSelected() || focusInput(input)

	const onSubmitCommand = () =>
	{
		const text = input?.current?.value
		addPromptToDisplayHistory(text)
		addValueToInputHistory(text)
		setInputValue(input)
		setInputHistoryIndex(-1)
	}

	const onSelectPreviousCommand = () =>
	{
		const index = offsetInputHistoryIndex(1)
		setInputHistoryIndex(index)
		setInputValue(input, inputHistory[index])
	}

	const onSelectNextCommand = () =>
	{
		const index = offsetInputHistoryIndex(-1)
		setInputHistoryIndex(index)
		setInputValue(input, inputHistory[index])
	}

	const displayEntries = displayHistory.map((entry, key) => (
		<span { ...{ key } }>
			{ entry }
			<br />
		</span>
	))

	return (
		<TerminalWindow { ...{ onFocusTerminal } }>
			{ displayEntries }
			<PromptLine { ...{
				input,
				success,
				currentDir,
				onSubmitCommand,
				onSelectNextCommand,
				onSelectPreviousCommand,
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

