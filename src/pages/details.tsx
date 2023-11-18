import { useParams } from 'react-router-dom'

export function Details() {
  const { slug } = useParams()

  return <strong className="text-foreground">{slug}</strong>
}
