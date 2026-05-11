import axios from "axios"
import { ChangeEvent, FormEvent, useState } from "react"

type formData = {
  username: string
  password: string
}

const formInit = {
  username: '',
  password: ''
}


export const U5Form = () => {
  const [input, setInput] = useState<formData>(formInit)

  const hdlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
  }

  const hdlSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const resp = await axios.post('https://httpbin.org/post', input)
      console.log(resp.data)
    }catch(err) {
      console.error(err)
    }
  }

  return (
    <div className="grid gap-3">
      <div className="text-2xl">Login Form</div>
      <form className="grid gap-2" onSubmit={hdlSubmit}>
        <input type="text" className="input" placeholder="Username"
          name="username"
          value={input.username}
          onChange={hdlChange}
        />
        <input type="text" className="input" placeholder="Password"
          name="password"
          value={input.password}
          onChange={hdlChange}
        />
        <button className="btn btn-info w-80">Login</button>
      </form>
      <div>
        <pre>{JSON.stringify(input, null, 2)}</pre>
      </div>
    </div>
  )
}
