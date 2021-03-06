import React, { KeyboardEvent, useContext, useState, ChangeEvent } from 'react'
import ListenerCollection from 'types/ListenerCollection'

import { InputContext } from 'data/InputContext'
import { PromptContext } from 'data/PromptContext'
import { CommandContext } from 'data/CommandContext'
import { DisplayContext } from 'data/DisplayContext'

import Prompt from 'components/Prompt'
import StaticPrompt from 'components/StaticPrompt'

const InteractivePrompt = () =>
{
	const input = useContext(InputContext)
	const prompt = useContext(PromptContext)
	const command = useContext(CommandContext)
	const display = useContext(DisplayContext)

	const [value, setValue] = useState('')

	const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

	const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) =>
	{
		const listeners: ListenerCollection = {
			'Enter': () =>
			{
				const value = prompt.input?.current?.value

				display.addEntry(<StaticPrompt { ...{
					dir: '~',
					value: value || '',
					success: prompt.success,
				} } />)

				setValue('')

				if (value)
				{
					input.addEntry(value)
					command.execute(value)
				}
			},
			'ArrowUp': () => setValue(input.getPreviousEntry()),
			'ArrowDown': () => setValue(input.getNextEntry()),
		}

		if (listeners[event.key])
		{
			event.preventDefault()
			listeners[event.key]()
		}
	}

	return (
		<span className='prompt-line'>
			<Prompt { ...{
				dir: '~',
				success: prompt.success,
			} } />
			<input { ...{
				value,
				onChange,
				onKeyDown,
				autoFocus: true,
				ref: prompt.input,
				className: 'prompt-input'
			} } />
		</span>
	)
}

export default InteractivePrompt
