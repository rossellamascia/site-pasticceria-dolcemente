import Link from 'next/link';
import { Menu } from '../../../models/Menu';

export interface NavLinkProps {
  menu: Menu;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavLink: React.FC<NavLinkProps> = ({ menu, isOpen, setIsOpen }) => {
  return (
    <Link href={menu.href}>
      <a
        className="mt-4 mr-4 block text-white hover:text-white hover:text-primary lg:mt-0 lg:inline-block"
        style={{ textDecoration: 'none' }}
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
      >
        {menu.name}
      </a>
    </Link>
  );
};
export default NavLink;
