import Image from 'next/image';

export interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative -z-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mx-auto px-4 sm:my-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center">
              <h1 className="text-4xl font-medium tracking-tight text-primary sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Grande evento in arrivo?
                </span>{' '}
                <span className="block text-primary">
                  Noi possiamo aiutarti
                </span>
              </h1>
              <div className="mt-5 justify-center sm:mt-8 sm:flex">
                <a className="inline-block rounded-full border border-gray-300 bg-transparent px-12 py-4 text-sm font-bold text-white hover:border-gray-200 hover:bg-primary">
                  Accetta
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-full">
        <Image
          src="/images/hero-pasticceria.jpg"
          width={1920}
          height={1080}
          alt="pasticceria dolcemente"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
export default Hero;
