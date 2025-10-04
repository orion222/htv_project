import Menu from './menu'
import Badge from './badge'
export default function Page() {
  return (
    <div className = 'w-screen flex items-center p-8'>
      <Badge/>
      <Menu/>
    </div>
  )
}