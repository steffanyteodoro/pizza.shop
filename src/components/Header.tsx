import { Separator } from '@radix-ui/react-separator'
import { Pizza, Home, UtensilsCrossed } from 'lucide-react'
import { NavLink } from './NavLink'
import { ThemeToggle } from './theme/theme-toggle'
import { AccountName } from './AccountMenu'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6 w-px bg-border mx-2" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4 mr-2" />
            Início
          </NavLink>

          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4 mr-2" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountName />
        </div>
      </div>
    </div>
  )
}
