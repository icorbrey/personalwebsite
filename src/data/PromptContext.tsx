import InputRef from 'types/InputRef'
import createContext from 'utils/createContext'
import React, { createRef, useState } from 'react'

interface PromptState
{
	input: InputRef
	focus: () => void
}

export const [
	PromptContext,
	PromptContextProvider
] = createContext<PromptState>(Context => ({ children }) =>
{
	const [input] = useState<InputRef>(createRef())

	const focus = () => input?.current?.focus()

	return (
		<Context.Provider value={ {
			focus,
			input,
		} }>
			{ children }
		</Context.Provider>
	)
})