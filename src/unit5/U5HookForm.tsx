import { useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import axios from "axios"

const loginSchema = z.object({
  username: z.string().min(1, "Please enter username"),
  password: z.string().min(6, "Password must > 6 chars.")
})

type FormData = z.infer<typeof loginSchema>

const formInit = {
  username: '',
  password: ''
}
export const U5HookForm = () => {
  const { register, handleSubmit, formState: { errors }, watch, clearErrors } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: formInit
  })
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const onSubmit = async (data: FormData) => {
    clearTimeout(timerRef.current)
    try{
    const resp = await axios.post('https://httpbin.org/post', data)
    console.log(resp.data)
    }catch(err){
      console.error(err)
    }
    timerRef.current = setTimeout(() => clearErrors(), 3000)
  }

  return (
    <div className="grid gap-3">
      <div className="text-2xl">Login Form</div>
      <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)} >
        <input type="text" className="input" placeholder="Username"
          {...register('username')}
        />
        {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
        <input type="text" className="input" placeholder="Password"
          {...register('password')}
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        <button className="btn btn-info w-80">Login</button>
      </form>
      <div>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </div>
  )
}
