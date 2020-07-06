import React, { ReactNode } from 'react'

interface TerminalWindowProps
{
	children?: ReactNode
	onFocusTerminal: () => void
}

export default ({ children, onFocusTerminal: onMouseUp }: TerminalWindowProps) => (
	<pre className='term-text terminal' { ...{ onMouseUp } }>
		{ children }
	</pre>
)
