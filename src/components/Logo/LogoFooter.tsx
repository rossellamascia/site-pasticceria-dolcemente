import Image from 'next/image';

export interface LogoFooterProps {}
const LogoFooter: React.FC<LogoFooterProps> = () => {
  return (
    <Image
      src="/images/logo/logo-footer.svg"
      alt="logo"
      layout="fixed"
      width={300}
      height={90}
    />
  );
};
export default LogoFooter;
