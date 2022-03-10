import Link from 'next/link';

export interface NavLinkProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavLink: React.FC<NavLinkProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Link href="/">
      <a
        className="mt-4 mr-4 block text-white hover:text-white hover:text-primary lg:mt-0 lg:inline-block"
        style={{ textDecoration: 'none' }}
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
      >
        Home
      </a>
    </Link>
  );
};
export default NavLink;
