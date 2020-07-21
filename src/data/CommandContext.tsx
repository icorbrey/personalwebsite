import React, { useContext } from 'react'
import createStatefulContext from 'react-context-stateful'

import { PromptContext } from 'data/PromptContext'
import { DisplayContext } from 'data/DisplayContext'

import Gruvbox from 'components/Gruvbox'

interface CommandState
{
    execute: (command: string) => void
}

interface CommandList
{
    [key: string]: () => void
}

export const [
    CommandContext,
    CommandContextProvider
] = createStatefulContext<CommandState>(Context => ({ children }) =>
{
    const prompt = useContext(PromptContext)
    const display = useContext(DisplayContext)

    const commands: CommandList = {
        'clear': () => display.clearHistory()
    }

    const execute = (command: string) =>
    {
        if (commands[command])
        {
            prompt.setSuccess(true)
            commands[command]()
        }
        else
        {
            prompt.setSuccess(false)
            display.addEntry(
                <p>
                    <Gruvbox fg='red'>
                        Invalid command.
                    </Gruvbox>
                </p>
            )
        }
    }

    return (
        <Context.Provider value={ {
            execute
        } }>
            { children }
        </Context.Provider>
    )
})