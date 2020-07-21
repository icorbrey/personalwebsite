import InputRef from 'types/InputRef'
import createStatefulContext from 'react-context-stateful'
import React, { createRef, useState, Dispatch, SetStateAction } from 'react'

interface PromptState
{
	input: InputRef
	focus: () => void
	success: boolean
	setSuccess: Dispatch<SetStateAction<boolean>>
}

export const [
	PromptContext,
	PromptContextProvider
] = createStatefulContext<PromptState>(Context => ({ children }) =>
{
	const [input] = useState<InputRef>(createRef())
	const [success, setSuccess] = useState(true)

	const focus = () => input?.current?.focus()

	return (
		<Context.Provider value={ {
			focus,
			input,
			success,
			setSuccess,
		} }>
			{ children }
		</Context.Provider>
	)
})
