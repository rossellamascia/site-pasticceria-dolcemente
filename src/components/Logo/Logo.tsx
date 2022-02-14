import Image from 'next/image';
export interface LogoProps {
  width: number;
  height: number;
}
const Logo: React.FC<LogoProps> = ({ width = 300, height = 39 }) => (
  <>
    <Image
      src="/images/logo/logo.svg"
      alt="logo"
      layout="fixed"
      width={200}
      height={26}
    />
  </>
);
export default Logo;
