import React, { createRef, useState, RefObject, ReactNode } from 'react'
import Welcome from './Welcome'
import PromptLine from './PromptLine'
import TerminalWindow from './TerminalWindow'

export default () =>
{
	const [inputRef] = useState(newInputRef())
	const [success] = useState(true)
	const [currentDir] = useState('~')
	const [history, setHistory] = useState<ReactNode[]>([])

	const addToHistory = useHistory(history, setHistory)

	return (
		<TerminalWindow { ...{ inputRef } }>
			<Welcome />
			{ getEntries(history) }
			<PromptLine { ...{ success, currentDir, inputRef, addToHistory } } />
		</TerminalWindow>
	)
}

const newInputRef = (): RefObject<HTMLInputElement> =>
	createRef<HTMLInputElement>()

const useHistory = (history: ReactNode[], setHistory: React.Dispatch<React.SetStateAction<ReactNode[]>>) => (entry: ReactNode) =>
	setHistory([...history, entry])

const getEntries = (history: ReactNode[]): ReactNode =>
	history.map(entry => <>{ entry }<br /></>)
