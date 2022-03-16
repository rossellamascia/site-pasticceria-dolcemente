export interface BannerProps {}
const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="my-16 flex items-center justify-center">
      <div className="mx-8 grid max-w-5xl grid-cols-6 rounded-xl bg-primary">
        <div className="col-span-4">
          <h2 className="ml-10 mt-8 text-3xl font-bold text-white">
            Voi regalarti un momento di felicità?
          </h2>

          <p className="ml-10 mt-2 text-lg font-light text-white">
            Puoi prenotare la tua torta o i tuoi pasticcini non rischierai di
            rimanerne senza
          </p>

          <button className="group ml-10 mt-7 mb-8 font-semibold text-white ">
            <a
              href="tel:+39058555459"
              className="rounded-md border-2 border-white px-3 py-2 text-white transition duration-300 ease-in-out hover:bg-black hover:text-white"
            >
              Chiama ora
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
