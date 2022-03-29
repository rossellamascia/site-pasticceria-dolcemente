import Link from 'next/link';
import { DataMenu } from 'pages/_app';

export interface NavLinkProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataMenu[];
}
const NavLink: React.FC<NavLinkProps> = ({ setIsOpen, data }) => {
  const handlerOnClick = () => setIsOpen && setIsOpen(false);

  return (
    <>
      {data?.map(item => (
        <Link href={item.href} key={item.id}>
          <a
            className="mt-4 mr-4 block text-white hover:text-white hover:text-primary lg:mt-0 lg:inline-block"
            onClick={handlerOnClick}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </>
  );
};
export default NavLink;
