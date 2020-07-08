import React, { createContext, ReactNode, useState } from 'react'

import InputHistory from 'types/InputHistory'
import InputHistoryEntry from "types/InputHistoryEntry"
import InputContextState from 'types/InputContextState'

const InputContext = createContext<InputContextState>({
	addEntry: _ => { },
	getNextEntry: () => '',
	getPreviousEntry: () => '',
})

interface InputContextProviderProps
{
	children?: ReactNode
}

export const InputContextProvider = ({ children }: InputContextProviderProps) =>
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
		<InputContext.Provider value={ {
			addEntry,
			getNextEntry,
			getPreviousEntry
		} }>
			{ children }
		</InputContext.Provider>
	)
}

export default InputContext
