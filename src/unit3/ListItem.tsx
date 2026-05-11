interface ListItemProps {
	id : number
	name: string
}

export const ListItem = (props : ListItemProps) => {
	return (
		<div className="bg-amber-200 ">
			<li className="list-row">{props.id}, {props.name}</li>
		</div>
	)
}
