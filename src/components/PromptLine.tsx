import React, { KeyboardEvent } from 'react'
import InputRef from '../types/InputRef'
import { DisplayHistoryRecorder } from '../types/History'

import Prompt from './Prompt'

export interface PromptLineProps
{
	success?: boolean
	inputRef: InputRef
	currentDir?: string
	addToDisplayHistory: DisplayHistoryRecorder
}

export default ({ success = true, currentDir = '~', inputRef, addToDisplayHistory }: PromptLineProps) =>
{
	const dir = currentDir

	const captureInput = useCapture({
		dir,
		success,
		inputRef,
		addToDisplayHistory,
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
	addToDisplayHistory: DisplayHistoryRecorder
}

const useCapture = ({ success, dir, addToDisplayHistory, inputRef }: UseCaptureParams) => (event: KeyboardEvent) =>
{
	if (event.key === 'Enter')
	{
		addToDisplayHistory(
			<span>
				<Prompt { ...{ success, dir } } />{ inputRef?.current?.value }
			</span>
		)

		if (inputRef !== null && inputRef.current !== null)
			inputRef.current.value = ''
	}

	window.scrollTo(0, (document.body.scrollHeight || document.documentElement.scrollHeight) + 15)
}
