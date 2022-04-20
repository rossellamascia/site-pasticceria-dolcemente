import { social } from '@/utils/index';
import LogoFooter from '../Logo/LogoFooter';

export interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black py-8 text-white sm:py-12">
      <div className="mb-10 flex  justify-center">
        <LogoFooter />
      </div>
      <div className="border-t px-4">
        <div className="mt-10 flex flex-col flex-wrap md:flex-row md:justify-around">
          <div className="mt-10 px-4">
            <h5 className="mb-6 text-xl font-bold">Orari apertura</h5>
            <div className="grid grid-cols-2">
              <h6 className="font-semibold">Martedì - Sabato</h6>
              <p className="ml-10">06:00 - 19:30</p>
            </div>
            <div className="grid grid-cols-2">
              <h6 className="font-semibold">Domenica</h6>
              <p className="ml-10">07:00 - 13:30</p>
            </div>
            <div className="grid grid-cols-2">
              <h6 className="font-semibold">Lunedì</h6>
              <p className="ml-10">Chiuso</p>
            </div>
          </div>
          <div className="mt-10 px-4">
            <h5 className="mb-6 text-xl font-bold">Indirizzo</h5>
            <address className="mb-4 not-italic">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.google.com/maps/dir/45.0874187,7.6919392/pasticceria+dolcemente+marina+di+carrara/@44.7028376,7.7391301,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x12d505611b83ee2f:0x3ac1772e3b68b270!2m2!1d10.0526986!2d44.0454641"
              >
                Viale XX Settembre, 288/C
                <br />
                54033 Carrara MS
              </a>
            </address>
          </div>
          <div className="mt-10 px-4">
            <h5 className="mb-6 text-xl font-bold sm:text-center xl:text-left">
              Seguici
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={social.facebook}
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="mx-auto h-full w-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href={social.instagram}
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="mx-auto h-full w-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
