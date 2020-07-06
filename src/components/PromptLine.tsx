import React, { KeyboardEvent } from 'react'
import InputRef from 'types/InputRef'
import Prompt from 'components/Prompt'

interface PromptLineProps
{
	input: InputRef
	success?: boolean
	currentDir?: string
	onSubmitCommand: () => void
	onSelectNextCommand: () => void
	onSelectPreviousCommand: () => void
}

export default ({
	input: ref,
	success = true,
	onSubmitCommand,
	onSelectNextCommand,
	currentDir: dir = '~',
	onSelectPreviousCommand
}: PromptLineProps) =>
{
	const onKeyDown = (event: KeyboardEvent) =>
	{
		preventDefault(event)

		switch (event.key)
		{
			case 'Enter':
				onSubmitCommand()
				break

			case 'ArrowUp':
				onSelectPreviousCommand()
				break

			case 'ArrowDown':
				onSelectNextCommand()
				break
		}

		scrollToBottom()
	}

	return (
		<span className='prompt-line'>
			<Prompt { ...{
				dir,
				success,
			} } />
			<input { ...{
				ref,
				onKeyDown,
				autoFocus: true,
				className: 'prompt-input',
			} } />
		</span>
	)
}

const scrollToBottom = () => window.scrollTo(0, getScrollHeight())

const getScrollHeight = () => document.body.scrollHeight
	|| document.documentElement.scrollHeight

const preventDefault = (event: React.KeyboardEvent<Element>) =>
{
	switch (event.key)
	{
		case 'Enter':
		case 'ArrowUp':
		case 'ArrowDown':
			event.preventDefault()
	}
}

