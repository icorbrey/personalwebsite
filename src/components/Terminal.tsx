import React, { useContext } from 'react'

import DisplayContext from 'data/DisplayContext'

import TerminalWindow from 'components/TerminalWindow'
import InteractivePrompt from 'components/InteractivePrompt'

const Terminal = () =>
{
	const { History } = useContext(DisplayContext)

	return (
		<TerminalWindow>
			<History />
			<InteractivePrompt />
		</TerminalWindow>
	)
}

export default Terminal
