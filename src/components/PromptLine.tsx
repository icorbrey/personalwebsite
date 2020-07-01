import React, { KeyboardEvent, RefObject, ReactNode } from 'react'
import Prompt from './Prompt'

type HistoryRecorder = (entry: ReactNode) => void
type InputRef = RefObject<HTMLInputElement>

export interface PromptLineProps
{
	success?: boolean
	inputRef: InputRef
	currentDir?: string
	addToHistory: HistoryRecorder
}

export default ({ success = true, currentDir = '~', inputRef, addToHistory }: PromptLineProps) =>
{
	const captureInput = useCapture(success, currentDir, addToHistory, inputRef)

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

const useCapture = (success: boolean, currentDir: string, addToHistory: HistoryRecorder, inputRef: InputRef) => (event: KeyboardEvent) =>
{
	if (event.key === 'Enter')
	{
		addToHistory(
			<span>
				<Prompt { ...{ success, dir: currentDir } } />{ inputRef?.current?.value }
			</span>
		)

		if (inputRef !== null && inputRef.current !== null)
			inputRef.current.value = ''
	}
}
