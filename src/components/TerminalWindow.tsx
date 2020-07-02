import React, { ReactNode } from 'react'
import InputRef from '../types/InputRef'

interface TerminalWindowProps
{
	children?: ReactNode
	inputRef: InputRef
}

export default ({ inputRef, children }: TerminalWindowProps) =>
{
	const onMouseUp = () => isTextSelected() || focusInput(inputRef)

	return (
		<pre { ...{
			onMouseUp,
			className: 'term-text terminal'
		} }>
			{ children }
		</pre>
	)
}

const focusInput = (inputRef: InputRef) => inputRef?.current?.focus()
const isTextSelected = () => window?.getSelection()?.toString()
