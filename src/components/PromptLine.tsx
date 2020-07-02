import React, { KeyboardEvent } from 'react'
import InputRef from '../types/InputRef'
import { HistoryRecorder } from '../types/History'

import Prompt from './Prompt'

export interface PromptLineProps
{
	success?: boolean
	inputRef: InputRef
	currentDir?: string
	addToHistory: HistoryRecorder
}

export default ({ success = true, currentDir = '~', inputRef, addToHistory }: PromptLineProps) =>
{
	const dir = currentDir

	const captureInput = useCapture({
		dir,
		success,
		inputRef,
		addToHistory,
	})

	return (
		<span className='prompt-line'>
			<Prompt { ...{ success, dir } } />
			<input
				autoFocus
				ref={ inputRef }
				className='prompt-input'
				onKeyDown={ captureInput } />
		</span>
	)
}

interface UseCaptureParams
{
	dir: string
	success: boolean
	inputRef: InputRef
	addToHistory: HistoryRecorder
}

const useCapture = ({ success, dir, addToHistory, inputRef }: UseCaptureParams) => (event: KeyboardEvent) =>
{
	if (event.key === 'Enter')
	{
		addToHistory(
			<span>
				<Prompt { ...{ success, dir } } />{ inputRef?.current?.value }
			</span>
		)

		if (inputRef !== null && inputRef.current !== null)
			inputRef.current.value = ''
	}
}
