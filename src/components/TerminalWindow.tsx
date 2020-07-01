import React, { RefObject, ReactNode } from 'react'

interface TerminalWindowProps
{
	children?: ReactNode
	inputRef: RefObject<HTMLInputElement>
}

export default ({ inputRef, children }: TerminalWindowProps) => (
	<pre className='term-text terminal' onMouseUp={ focusInputIfNotSelected(inputRef) }>
		{ children }
	</pre>
)

const focusInputIfNotSelected = (ref: RefObject<HTMLInputElement>) => () =>
	window?.getSelection()?.toString() || ref?.current?.focus()
