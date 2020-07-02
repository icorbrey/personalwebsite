import React, { createRef, useState } from 'react'
import InputRef from '../types/InputRef'
import { History, HistoryEntry, HistorySetter } from '../types/History'

import Welcome from './Welcome'
import PromptLine from './PromptLine'
import TerminalWindow from './TerminalWindow'

export default () =>
{
	const [inputRef] = useState(newInputRef())
	const [success] = useState(true)
	const [currentDir] = useState('~')
	const [history, setHistory] = useState<History>([<Welcome />])

	const addToHistory = useHistory(history, setHistory)

	return (
		<TerminalWindow { ...{ inputRef } }>
			{ getEntries(history) }
			<PromptLine { ...{ success, currentDir, inputRef, addToHistory } } />
		</TerminalWindow>
	)
}

const newInputRef = (): InputRef =>
	createRef<HTMLInputElement>()

const useHistory = (history: History, setHistory: HistorySetter) => (entry: HistoryEntry) =>
	setHistory([...history, entry])

const getEntries = (history: History): HistoryEntry =>
	history.map(entry => <>{ entry }<br /></>)
