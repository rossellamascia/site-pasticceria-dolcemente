import Image from 'next/image';
import { GalleryData } from '../../models/GalleryData';

export interface GalleryProps {
  data: GalleryData[];
}
const Gallery: React.FC<GalleryProps> = ({ data }) => {
  return (
    <>
      <section className="hidden bg-white py-10 px-36">
        <div className="-mx-4 flex flex-wrap">
          <div className=" px-4 md:block md:w-1/2">
            <div
              className="h-full w-full rounded bg-cover shadow-md"
              style={{
                backgroundImage: "url('/images/persone.jpeg')",
              }}
            ></div>
          </div>
          <div className="h-auto px-4 md:w-1/2">
            <div className="mb-8">
              <img
                className="rounded shadow-md"
                src="/images/torta.jpeg"
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded shadow-md"
                src="/images/torta2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hidden bg-white py-10 px-36">
        <div className="-mx-4 flex flex-wrap">
          <div className=" px-4 md:block md:w-1/2">
            <div
              className="h-full w-full rounded bg-cover shadow-md"
              style={{
                backgroundImage: "url('/images/persone.jpeg')",
              }}
            ></div>
          </div>
          <div className="h-auto px-4 md:w-1/2">
            <div className="mb-8">
              <img
                className="rounded shadow-md"
                src="/images/torta.jpeg"
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded shadow-md"
                src="/images/torta2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
