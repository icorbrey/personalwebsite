import React, { createRef, useState } from 'react'
import { InputHistory, InputHistoryProvider } from '../types/InputHistory'
import { DisplayHistory, DisplayHistoryProvider, DisplayHistoryConsumer } from '../types/DisplayHistory'

import Welcome from './Welcome'
import PromptLine from './PromptLine'
import TerminalWindow from './TerminalWindow'

export default () =>
{
	const [success] = useState(true)
	const [currentDir] = useState('~')
	const [inputRef] = useState(createRef<HTMLInputElement>())
	const [inputHistory, setInputHistory] = useState<InputHistory>([])
	const [displayHistory, setDisplayHistory] = useState<DisplayHistory>([<Welcome />])

	const addToInputHistory = useInputHistory(inputHistory, setInputHistory)
	const addToDisplayHistory = useDisplayHistory(displayHistory, setDisplayHistory)

	return (
		<TerminalWindow { ...{ inputRef } }>
			{ getDisplayEntries(displayHistory) }
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

const useInputHistory: InputHistoryProvider = (history, setHistory) => entry =>
	setHistory([entry, ...history])

const useDisplayHistory: DisplayHistoryProvider = (history, setHistory) => entry =>
	setHistory([...history, entry])

const getDisplayEntries: DisplayHistoryConsumer = history =>
	history.map(entry => <>{ entry }<br /></>)
