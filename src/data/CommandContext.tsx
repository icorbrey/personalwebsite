import React, { useContext } from 'react'
import createStatefulContext from 'react-context-stateful'

import { PromptContext } from 'data/PromptContext'
import { DisplayContext } from 'data/DisplayContext'

import Gruvbox from 'components/Gruvbox'
import Welcome from 'components/Welcome'

interface CommandState
{
    execute: (command: string) => void
}

type Command = {
    action: (args: string[]) => void
    description: string
}

type CommandList = {
    [key: string]: Command
}

export const [
    CommandContext,
    CommandContextProvider
] = createStatefulContext<CommandState>(Context => ({ children }) =>
{
    const prompt = useContext(PromptContext)
    const display = useContext(DisplayContext)

    const commands: CommandList = {
        'help': {
            action: () =>
            {
                const spaces = Object.keys(commands)
                    .map(x => x.length)
                    .reduce((x, y) => Math.max(x, y))

                display.addEntry(
                    <>
                        <span>Available commands:</span>
                        <br />
                        { Object.keys(commands).map((command, key) => (
                            <>
                                <span { ...{ key } }>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    { command }
                                    { ' '.repeat(spaces - command.length + 1) }
                                    - { commands[command].description }
                                </span>
                                <br />
                            </>
                        )) }
                    </>
                )
            },
            description: 'Displays this help message.'
        },
        'welcome': {
            action: () => display.addEntry(<Welcome />),
            description: 'Display the welcome message.'
        },
        'clear': {
            action: () => display.clearHistory(),
            description: 'Clear the screen.'
        },
        'echo': {
            action: args => display.addEntry(
                <>
                    <span>
                        { args.join(' ') }
                    </span>
                    <br />
                </>
            ),
            description: 'Print the given string.'
        }
    }

    const execute = (command: string) =>
    {
        const [name, ...args] = command.split(' ')

        if (commands[name])
        {
            prompt.setSuccess(true)
            commands[name].action(args)
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