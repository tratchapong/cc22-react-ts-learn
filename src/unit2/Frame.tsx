import { ReactNode } from "react"

interface FrameProps {
	children : ReactNode,
	color? : string
}

export const Frame = (props : FrameProps) => {
	return (
		<div className="p-4 m-3 border-4 rounded border-violet-400" style={{ color: props.color}}>
			{props.children}
		</div>
	)
}
