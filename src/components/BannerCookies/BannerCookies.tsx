import { setCookie } from '@/utils/index';
import { Dispatch, SetStateAction } from 'react';

export interface BannerCookiesProps {
  setShowBanner: Dispatch<SetStateAction<boolean>>;
}
const BannerCookies: React.FC<BannerCookiesProps> = ({ setShowBanner }) => {
  const handlerClick = () => {
    setCookie('banner', 'accepted', 1);
    setShowBanner(false);
  };
  return (
    <div className="fixed bottom-0 left-0 z-50 px-4 pb-5 shadow-sm lg:px-5">
      <div className="relative rounded-xl bg-black p-5">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="mb-4 w-full px-4 md:w-auto lg:mb-0">
            <h3 className="font-heading mb-2 text-2xl font-bold text-white">
              Cookie Policy
            </h3>
            <p className="max-w-xs leading-loose text-gray-200">
              Cliccando su Accetta, acconsenti alla memorizzazione dei cookie
              sul tuo dispositivo per migliorare la navigazione nel sito
            </p>
          </div>
        </div>
        <div className="flex w-full pt-3">
          <a
            className="inline-block rounded-full border border-gray-300 bg-transparent px-12 py-4 text-sm font-bold text-white hover:border-gray-200 hover:bg-primary"
            onClick={handlerClick}
          >
            Accetta
          </a>
        </div>
      </div>
    </div>
  );
};
export default BannerCookies;
