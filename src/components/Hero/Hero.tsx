import Image from 'next/image';

export interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative -z-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mx-auto px-4 sm:my-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
                <span className="block uppercase xl:inline">
                  Grande Apertura
                </span>{' '}
                <span className="block uppercase text-primary">
                  Stiamo arrivando
                </span>
              </h1>
              <div className="mt-5 justify-center sm:mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="hover: flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                  >
                    Chiamaci
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-full">
        <Image
          src="/images/background/background.jpg"
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
