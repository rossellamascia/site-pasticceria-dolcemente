import Logo from '../../Logo/Logo';
import NavLink from '../NavLink/NavLink';

export interface MobileNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen }) => (
  <div
    className={`absolute top-0 left-0 z-20 h-screen w-screen transform bg-black ${
      open ? '-translate-x-0' : '-translate-x-full'
    } drop-shadow-md filter transition-transform duration-300 ease-in-out`}
  >
    <div className="mt-6 ml-4 flex items-center bg-black drop-shadow-md filter">
      <Logo width={200} height={29} />
    </div>
    <div className="ml-4 flex flex-col text-white">
      <NavLink setIsOpen={setOpen} />
    </div>
  </div>
);
export default MobileNav;
