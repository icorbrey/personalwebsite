import InputRef from 'types/InputRef'
import React, { createRef, useState } from 'react'
import createStatefulContext from 'react-context-stateful'

interface PromptState
{
	input: InputRef
	focus: () => void
}

export const [
	PromptContext,
	PromptContextProvider
] = createStatefulContext<PromptState>(Context => ({ children }) =>
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
