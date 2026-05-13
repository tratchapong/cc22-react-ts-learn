import { useEffect, useState } from "react"
import { PostItem } from "./PostItem"
import axios from "axios"

// https://app.quicktype.io : แปลง JSON เป็น type / interface

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const U4 = () => {
  const [posts, setPosts] = useState<Posts[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        await new Promise( resolve => setTimeout(resolve, 1000))
        const resp = await axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
        setPosts(resp.data)
      }catch(err) {
        setError( err instanceof Error ? err.message : 'unknown error')
      }finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error} </p>

  return (
    <div className="grid gap-2">
      <div className="text-xl">List all posts</div>
      <hr/>
      <ul className="grid gap-4">
        {posts.map(el => (
          <PostItem key={el.id} post={el}/>
        ))}
      </ul>
    </div>
  )
}
