import { SetStateAction } from 'react';

export interface HamburgerButtonProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}
const HamburgerButton: React.FC<HamburgerButtonProps> = ({ open, setOpen }) => {
  return (
    <div
      className="relative z-50 flex h-6 w-6 flex-col items-center justify-between md:hidden"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <span
        className={`h-1 w-full transform rounded-lg bg-white transition duration-300 ease-in-out ${
          open ? 'translate-y-3.5 rotate-45' : ''
        }`}
      />
      <span
        className={`h-1 w-full rounded-lg bg-white transition-all duration-300 ease-in-out ${
          open ? 'w-0' : 'w-full'
        }`}
      />
      <span
        className={`h-1 w-full transform rounded-lg bg-white transition duration-300 ease-in-out ${
          open ? '-translate-y-3.5 -rotate-45' : ''
        }`}
      />
    </div>
  );
};

export default HamburgerButton;
