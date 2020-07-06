import React, { KeyboardEvent } from 'react'
import InputRef from '../types/InputRef'
import ListenerCollection from '../types/ListenerCollection'
import Prompt from './Prompt'

interface PromptLineProps
{
	input: InputRef
	success?: boolean
	currentDir?: string
	keyDownListeners: ListenerCollection
}

export default ({ keyDownListeners, success = true, input, currentDir = '~' }: PromptLineProps) =>
{
	const onKeyDown = (event: KeyboardEvent) =>
	{
		if (keyDownListeners[event.key])
		{
			event.preventDefault()
			keyDownListeners[event.key]()
		}

		scrollToBottom()
	}

	return (
		<span className='prompt-line'>
			<Prompt { ...{
				success,
				dir: currentDir,
			} } />
			<input { ...{
				onKeyDown,
				ref: input,
				autoFocus: true,
				className: 'prompt-input',
			} } />
		</span>
	)
}

const scrollToBottom = () => window.scrollTo(0, getScrollHeight())

const getScrollHeight = () => document.body.scrollHeight
	|| document.documentElement.scrollHeight
