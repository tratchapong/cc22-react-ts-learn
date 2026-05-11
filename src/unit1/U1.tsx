import { Button } from "./Button"

export const U1 = () => {
	const hdlClick = () => {
		alert('I love Coding')
	}
	return (
		<div className="flex gap-4">
			{/* ให้ทุก Button สามารถใส className เพิ่มได้ */}
			<Button label="Btn1" onClick={()=>alert('I love Typescript')} />
			<Button label="Btn2" onClick={hdlClick} className='btn-circle ms-20 p-3' />
			<Button onClick={hdlClick} />
		</div>
	)
}
