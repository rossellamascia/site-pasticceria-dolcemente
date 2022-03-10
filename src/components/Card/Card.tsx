import Image from 'next/image';
import { CardData } from '../../models/CardData';

export interface CardProps {
  data: CardData[];
}
const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <section className="my-16 mx-0 grid min-h-screen place-items-center p-5 lg:mx-32">
      <div>
        <h1 className="mb-16 text-sm font-bold text-black sm:text-5xl md:text-7xl">
          Le nostre torte
        </h1>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {data.map(image => (
            <div className="rounded bg-black p-3 shadow-lg" key={image.id}>
              <div className="group relative">
                <Image
                  className="block w-full rounded md:w-72"
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{image.title}</h3>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};
export default Card;
