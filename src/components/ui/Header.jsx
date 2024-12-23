import { Link } from "react-router-dom"
import { Button } from "./button"

const Header = () => {
  return (
    <nav className="py-4 flex justify-between items-center" >
      <Link>
       <img src="/logo.png" className="h-20" alt="Hired!"/>
       </Link>

       <Button variant="outline">Login</Button>
    </nav>
  )
}

export default Header