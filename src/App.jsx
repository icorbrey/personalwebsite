import { Route, Switch } from 'react-router-dom'
// import { Transition, TransitionGroup } from 'react-transition-group'
import React, { Component } from 'react'

import Contact from 'views/Contact'
import Experience from 'views/Experience'
import Home from 'views/Home'
import Interests from 'views/Interests'
import Portfolio from 'views/Portfolio'

export default class App extends Component
{
	render()
	{
		return (
			// <Route render={ ({ location }) =>
			// {
			// 	const { key } = location

			// 	return (
			// <TransitionGroup component={ null }>
			// 	<Transition
			// 		key={ key }
			// 		appear={ true }
			// 		timeout={ { enter: 750, exit: 0 } }
			// 	>
			<Switch>
				<Route exact path='/' component={ Home } />
				<Route path='/experience' component={ Experience } />
				<Route path='/contact' component={ Contact } />
				<Route path='/interests' component={ Interests } />
				<Route path='/portfolio' component={ Portfolio } />
			</Switch>
			// 	</Transition>
			// </TransitionGroup>
			// 	)
			// } } />
		)
	}
}
