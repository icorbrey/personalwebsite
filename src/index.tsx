import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'

import { InputContextProvider } from 'data/InputContext'
import { PromptContextProvider } from 'data/PromptContext'
import { DisplayContextProvider } from 'data/DisplayContext'

import App from './components/App'

ReactDOM.render(
	<DisplayContextProvider>
		<PromptContextProvider>
			<InputContextProvider>
				<App />
			</InputContextProvider>
		</PromptContextProvider>
	</DisplayContextProvider>,
	document.getElementById('root')
)
