import React, { ReactNode } from 'react'

interface TerminalWindowProps
{
	children?: ReactNode
	onMouseUp: () => void
}

export default ({ onMouseUp, children }: TerminalWindowProps) => (
	<pre className='term-text terminal' { ...{ onMouseUp } }>
		{ children }
	</pre>
)
