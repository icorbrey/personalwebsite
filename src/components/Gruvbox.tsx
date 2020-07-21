import React from 'react'
import { GruvboxProps } from 'types/Props'
import GruvboxColor from 'types/GruvboxColor'

const Gruvbox = ({ fg, bg, className: inputClassName, children }: GruvboxProps) =>
{
	const className = getClassNames(fg, bg, inputClassName)

	return (
		<span { ...{ className } }>
			{ children }
		</span>
	)
}

const getClassNames = (fg?: GruvboxColor, bg?: GruvboxColor, className?: string) =>
	[toForeground(fg), toBackground(bg), className]
		.filter(x => x)
		.join(' ')

const toForeground = (color: GruvboxColor | undefined): string | undefined =>
	color && `gruvbox-${ color }`

const toBackground = (color: GruvboxColor | undefined): string | undefined =>
	color && `gruvbox-bg-${ color }`

export default Gruvbox
