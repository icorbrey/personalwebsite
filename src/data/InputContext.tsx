import React, { useState } from 'react'
import InputHistory from 'types/InputHistory'
import InputHistoryEntry from 'types/InputHistoryEntry'
import createStatefulContext from 'react-context-stateful'

interface InputState
{
	getNextEntry: () => InputHistoryEntry
	getPreviousEntry: () => InputHistoryEntry
	addEntry: (entry: InputHistoryEntry) => void
}

export const [
	InputContext,
	InputContextProvider
] = createStatefulContext<InputState>(Context => ({ children }) =>
{
	const [index, setIndex] = useState<number>(-1)
	const [history, setHistory] = useState<InputHistory>([])

	const addEntry = (entry: InputHistoryEntry) =>
	{
		setHistory([entry, ...history])
		setIndex(-1)
	}

	const getNextEntry = () =>
	{
		const newIndex = Math.max(index - 1, -1)
		setIndex(newIndex)
		return newIndex !== -1 ? history[newIndex] : ''
	}

	const getPreviousEntry = () =>
	{
		const newIndex = Math.min(index + 1, history.length - 1)
		setIndex(newIndex)
		return newIndex !== -1 ? history[newIndex] : ''
	}

	return (
		<Context.Provider value={ {
			addEntry,
			getNextEntry,
			getPreviousEntry
		} }>
			{ children }
		</Context.Provider>
	)
})
