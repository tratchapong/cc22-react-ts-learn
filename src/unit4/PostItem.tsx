import type { Posts } from "./U4"

interface PostProps {
  post : Posts
}

export const PostItem = ({ post }: PostProps) => {
  const { id, title, body } = post
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title font-semibold">{id} {title}</div>
      <div className="collapse-content text-sm">{body}</div>
    </div>
  )
}
