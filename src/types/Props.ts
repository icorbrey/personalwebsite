import { ReactNode } from 'react'
import GruvboxColor from 'types/GruvboxColor'

type HasChildren = {
	children?: ReactNode
}

type HasClassName = {
	className?: string
}

export type GruvboxProps = HasChildren & HasClassName & {
	bg?: GruvboxColor
	fg?: GruvboxColor
}

export type LinkProps = {
	alt: string
	link: string
}

export type ListLinkProps = LinkProps & {
	label: string
	spaces: number
}

export type PromptProps = {
	dir: string,
	success: boolean,
}

export type StaticPromptProps = PromptProps & {
	value: string,
}

export type TerminalWindowProps = HasChildren
