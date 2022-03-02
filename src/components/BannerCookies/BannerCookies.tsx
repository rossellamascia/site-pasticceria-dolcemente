export interface BannerCookiesProps {}
const BannerCookies: React.FC<BannerCookiesProps> = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 px-4 pb-5 lg:px-5">
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
          <a className="inline-block rounded-full border border-gray-300 bg-transparent px-12 py-4 text-sm font-bold text-white hover:border-gray-200 hover:bg-primary">
            Accetta
          </a>
        </div>
      </div>
    </div>
  );
};
export default BannerCookies;
