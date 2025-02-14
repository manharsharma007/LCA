import Link from "next/link";
import "material-symbols";
import { Roboto } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { Playfair_Display } from "next/font/google";

//👇 Configure our font object
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});
const roboto_sc = Roboto_Condensed({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-row justify-between align-middle items-center">
          <Link href={"/"}>
            <button
              type="button"
              className="text-white bg-[#186EC4] hover:bg-[#024C96] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="material-symbols-outlined pe-4">
                arrow_circle_left
              </span>
              Go Back
            </button>
          </Link>
          <div className="text-center mx-auto w-[400px]">
            <img src="/logo.png" alt="" width={400} />
          </div>
          <Link href={"calculator"}>
            <button
              type="button"
              className="text-white bg-[#186EC4] hover:bg-[#024C96] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Started
              <span className="material-symbols-outlined ps-4">
                arrow_circle_right
              </span>
            </button>
          </Link>
        </div>

        <div className="description mx-8 my-6 p-4 rounded-lg inset-shadow- inset-shadow-black-500">
          <h4
            className={`${roboto.className} text-[2rem] font-extrabold text-center mb-6 mt-2 text-[#14385D] w-[90%] mx-auto pt-10 leading-[2.8rem] tracking-[1px]`}
          >
            Welcome to the Revolution-ZERO Life Cycle Assessment platform for
            comparing the environmental impacts of different processing
            facilities of technical medical textiles. This has been
            experimentally derived for application of surgical gowns and
            operating theatre drapes.
          </h4>
          <p className={`${roboto_sc.className} text-[#14385D] text-xl mt-6`}>
            This tool will ask you a number of questions related to different
            services you might use for processing your gowns and/or drapes.
            Completing the information for one organisation is estimated to take
            3-4 minutes.
          </p>
          <p className={`${roboto_sc.className} text-[#14385D] text-xl mt-6`}>
            At the end your will have at least four outputs being:
          </p>
          <ul className="ml-[20%] list-decimal mt-16">
            <li className={`${roboto_sc.className} my-2 text-xl`}>
              The environmental impact of a standardised single-use product
            </li>
            <li className={`${roboto_sc.className} my-2 text-xl`}>
              The environmental impact of a benchmark reusable product
              (reference Vozolla et al 2018/2020)
            </li>
            <li className={`${roboto_sc.className} my-2 text-xl`}>
              The environmental impact of an optimised Revolution-ZERO product
            </li>
            <li className={`${roboto_sc.className} my-2 text-xl`}>
              The environmental impact of your inputted process
            </li>
            <li className={`${roboto_sc.className} my-2 text-xl`}>
              Any additional options you wish to compare (optional)
            </li>
          </ul>
          <p className={`${roboto.className} text-[#14385D] text-xl mt-16`}>
            <em>
              <sup className="text-[#cc1122]">*</sup>
              <sup className="text-[#cc1122]">*</sup>This work is based off
              published literature and the UK NHS Net Zero funded LCA work
              completed by University College London Chemical Engineering team
              as subcontractors to Revolution-ZERO.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
