import React, { KeyboardEvent, useContext, useState, ChangeEvent } from 'react'

import ListenerCollection from 'types/ListenerCollection'

import InputContext from 'data/InputContext'
import PromptContext from 'data/PromptContext'
import DisplayContext from 'data/DisplayContext'

import Prompt from 'components/Prompt'
import StaticPrompt from 'components/StaticPrompt'

const InteractivePrompt = () =>
{
	const { ref } = useContext(PromptContext)
	const { addEntry: addDisplayEntry } = useContext(DisplayContext)
	const { addEntry: addInputEntry, getNextEntry, getPreviousEntry } = useContext(InputContext)

	const [value, setValue] = useState('')

	const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

	const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) =>
	{
		const listeners: ListenerCollection = {
			'Enter': () =>
			{
				const value = ref?.current?.value
				if (value)
					addInputEntry(value)
				addDisplayEntry(<StaticPrompt { ...{
					dir: '~',
					success: true,
					value: value || ''
				} } />)
				setValue('')
			},
			'ArrowUp': () => setValue(getPreviousEntry()),
			'ArrowDown': () => setValue(getNextEntry()),
		}

		if (listeners[event.key])
		{
			event.preventDefault()
			listeners[event.key]()
		}
	}

	return (
		<span className='prompt-line'>
			<Prompt dir='~' success={ true } />
			<input { ...{
				ref,
				value,
				onChange,
				onKeyDown,
				autoFocus: true,
				className: 'prompt-input'
			} } />
		</span>
	)
}

export default InteractivePrompt
