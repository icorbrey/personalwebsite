import React, { createRef, useState, ReactNode } from 'react'
import { DisplayHistory, DisplayHistoryEntry, DisplayHistorySetter } from '../types/History'

import Welcome from './Welcome'
import PromptLine from './PromptLine'
import TerminalWindow from './TerminalWindow'

export default () =>
{
	const [success] = useState(true)
	const [currentDir] = useState('~')
	const [inputRef] = useState(createRef<HTMLInputElement>())
	const [displayHistory, setDisplayHistory] = useState<DisplayHistory>([<Welcome />])

	const addToHistory = useDisplayHistory(displayHistory, setDisplayHistory)

	return (
		<TerminalWindow { ...{ inputRef } }>
			{ getDisplayEntries(displayHistory) }
			<PromptLine { ...{ success, currentDir, inputRef, addToDisplayHistory: addToHistory } } />
		</TerminalWindow>
	)
}

const useDisplayHistory = (displayHistory: DisplayHistory, setDisplayHistory: DisplayHistorySetter) => (entry: DisplayHistoryEntry) =>
	setDisplayHistory([...displayHistory, entry])

const getDisplayEntries = (history: DisplayHistory): ReactNode[] =>
	history.map(entry => <>{ entry }<br /></>)
