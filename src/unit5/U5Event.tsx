import { FormEvent, type ChangeEvent, type MouseEvent } from "react"
import { useState } from "react"

export const U5Event = () => {
  const [inp1, setInp1] = useState('')
  const hdlClick = (e : MouseEvent<HTMLButtonElement>)=>{
    if(e.altKey) {
      alert('999')
    }
    console.log(999)
  }

  const hdlChange = (e : ChangeEvent<HTMLInputElement>) => {
    setInp1(e.target.value)
  }

  const hdlSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }


  return (
    <div className="grid gap-4">
      <button className='btn btn-info' onClick={hdlClick}>Btn1</button>
      <form onSubmit={hdlSubmit}>
        <input className="input" onChange={hdlChange}/>
        <button className="btn btn-info">submit</button>
      </form>
      <p>output : {inp1}</p>
    </div>
  )
}
