export interface GalleryProps {}
const Gallery: React.FC<GalleryProps> = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
            Gallery Product
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap">
          <div className="w-1/2 p-4 lg:w-1/3">
            <a href="#">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src="https://imgcdn.rri.co.id/__srct/b763d32e20ec5d473fd182b5c78d0964/969622/img_20210416_190115.jpg?v=1.0.3"
                />
                <div className="relative z-10 w-full border-4 border-gray-200 bg-indigo-500 px-8 py-10 opacity-0 hover:opacity-90">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-white">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-bold text-white hover:text-indigo-100">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="w-1/2 p-4 lg:w-1/3">
            <a href="#">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src="https://imgcdn.rri.co.id/__srct/b763d32e20ec5d473fd182b5c78d0964/969622/img_20210416_190115.jpg?v=1.0.3"
                />
                <div className="relative z-10 w-full border-4 border-gray-200 bg-indigo-500 px-8 py-10 opacity-0 hover:opacity-90">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-white">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-bold text-white hover:text-indigo-100">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="w-1/2 p-4 lg:w-1/3">
            <a href="#">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src="https://imgcdn.rri.co.id/__srct/b763d32e20ec5d473fd182b5c78d0964/969622/img_20210416_190115.jpg?v=1.0.3"
                />
                <div className="relative z-10 w-full border-4 border-gray-200 bg-indigo-500 px-8 py-10 opacity-0 hover:opacity-90">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-white">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-bold text-white hover:text-indigo-100">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="w-1/2 p-4 lg:w-1/3">
            <a href="#">
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src="https://imgcdn.rri.co.id/__srct/b763d32e20ec5d473fd182b5c78d0964/969622/img_20210416_190115.jpg?v=1.0.3"
                />
                <div className="relative z-10 w-full border-4 border-gray-200 bg-indigo-500 px-8 py-10 opacity-0 hover:opacity-90">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-white">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-bold text-white hover:text-indigo-100">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
