import Image from 'next/image';

export interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center bg-no-repeat">
      <Image
        src="/images/hero-evento.jpg"
        alt="hero"
        objectFit="cover"
        layout="fill"
        className="-z-10"
      />
      <div className="relative flex h-screen w-full items-center justify-center bg-black bg-opacity-50 lg:justify-start">
        <div className=" mx-4 text-center text-white lg:ml-20 lg:text-left">
          <h1 className="mb-4 text-3xl font-bold lg:text-6xl">
            Grande evento in arrivo?
            <br /> Cosa aspetti?
          </h1>
          <h2 className="mb-12 text-2xl font-semibold">
            Parlaci dei tuoi gusti e ti daremo la soluzione migliore per te
          </h2>
          <a
            href="tel:+39058555459"
            className="mr-6 rounded-md border-2 border-white px-5 py-4 font-bold text-white transition duration-300 ease-in-out hover:bg-primary hover:text-white"
          >
            Chiama ora
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
