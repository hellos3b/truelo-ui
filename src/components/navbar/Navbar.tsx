/** @jsx jsx */
import { jsx } from '@emotion/core'
import {cssNavbar, cssNavItem, cssNavItemSelected} from './Navbar-css'
import { navigate } from '@/core/router'

type NavItemProps = {
  href: string;
  icon: string;
  title: string;
  selected?: boolean;
}

const NavItem = ({href, icon, title, selected}: NavItemProps) => {
  const classes = [cssNavItem, selected && cssNavItemSelected]

  const handleClick = () => {
    navigate({}, href)
  }

  return (
    <div css={classes} onClick={handleClick}>
      <div className='icon'><i className={icon}></i></div>
      <div className='title'>{title}</div>
    </div>
  )
}

type NavbarProps = {
  selected: string;
}

export const Navbar = ({ selected }: NavbarProps) => {
  const isSelected = (title: string) => selected === title

  return (
    <nav css={cssNavbar}>
      <NavItem href="/" icon="far fa-newspaper" title="Feed" selected={isSelected("Feed")}/>
      <NavItem href="/group" icon="fas fa-users" title="Groups" selected={isSelected("Groups")}/>
      <NavItem href="/user" icon="far fa-user" title="Profile" selected={isSelected("Profile")}/>
    </nav>
  )
}