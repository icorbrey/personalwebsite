import React, { createRef, useState } from 'react'
import { InputHistory, InputHistoryEntry } from '../types/InputHistory'
import { DisplayHistory, DisplayHistoryEntry } from '../types/DisplayHistory'

import Welcome from './Welcome'
import PromptLine from './PromptLine'
import TerminalWindow from './TerminalWindow'
import InputRef from '../types/InputRef'

export default () =>
{
	const [success] = useState(true)
	const [currentDir] = useState('~')
	const [inputRef] = useState(createRef<HTMLInputElement>())
	const [inputHistory, setInputHistory] = useState<InputHistory>([])
	const [displayHistory, setDisplayHistory] = useState<DisplayHistory>([<Welcome />])

	const addToInputHistory = (entry: InputHistoryEntry) =>
		setInputHistory([entry, ...inputHistory])

	const addToDisplayHistory = (entry: DisplayHistoryEntry) =>
		setDisplayHistory([...displayHistory, entry])

	const displayEntries = displayHistory.map((entry, key) => (
		<p { ...{ key } }>
			{ entry }
			<br />
		</p>
	))

	const onTerminalMouseUp = () =>
		isTextSelected() || focusInputRef(inputRef)

	return (
		<TerminalWindow onMouseUp={ onTerminalMouseUp }>
			{ displayEntries }
			<PromptLine { ...{
				success,
				currentDir,
				inputRef,
				inputHistory,
				addToInputHistory,
				addToDisplayHistory,
			} } />
		</TerminalWindow>
	)
}

const isTextSelected = () =>
	window?.getSelection()?.toString()

const focusInputRef = (ref: InputRef) =>
	ref?.current?.focus()
