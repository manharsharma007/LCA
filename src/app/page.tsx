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
    <div className="fixed bg-[url(/new-bg.jpg)] bg-no-repeat bg-fixed w-screen h-screen bg-center bg-opacity-25">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between align-middle items-center">
          <div className="text-center mx-auto w-[400px] relative p-2">
            <div className="absolute bg-[rgba(255,255,255,1)] w-full h-full blur-xl z-[-1]"></div>
            <img src="/logo.png" alt="" width={400} />
          </div>
        </div>

        <div className="px-4 py-4 bg-white rounded-lg flex gap-4 border border-[#eee] shadow-md items-center bg-[url(/bg-menu.png)] bg-no-repeat bg-right">
          <Link href={"introduction"}>
            <button
              type="button"
              className="text-[#666]  text-lg flex items-center"
            >
              Introduction
              <span className="material-symbols-outlined ps-4 text-[#4F855B]">
                info
              </span>
            </button>
          </Link>
          <div className="w-[1px] h-[25px] bg-blue-300"></div>
          <Link href={"calculator"}>
            <button
              type="button"
              className="text-[#666] text-lg flex items-center"
            >
              Get Started
              <span className="material-symbols-outlined ps-4 text-[#4F855B]">
                arrow_circle_right
              </span>
            </button>
          </Link>
        </div>

        <div className="description mx-10 my-6 p-4 rounded-lg inset-shadow-black-500">
          <div className="relative p-6">
            <div className="absolute bg-[rgba(255,255,255,0.95)] w-full h-full blur-2xl z-[-1]"></div>
            <h4
              className={`${roboto.className} text-[2.8rem] font-extrabold text-center mb-6 mt-2 text-[#14385D] w-[90%] mx-auto pt-10 leading-[3rem] tracking-[2px]`}
            >
              Static Graphics of the three scenarios utilising 100% polyester
              gowns (SU. RU. RZ) –{" "}
              <span className={`text-[#CB3737] font-black`}>
                Reference Vozzola et al 2020.
              </span>
            </h4>
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
            </ul>
          </div>
          <div className="mt-24 flex flex-row justify-center">
            <Link href={"calculator"}>
              <button
                type="button"
                className="group text-[#cc1122] bg-[#fff] hover:bg-[#f8f8f8] focus:ring-4 focus:outline-none rounded-lg text-lg px-8 py-4 text-center inline-flex items-center text-[2rem]"
              >
                Get Started
                <span className="material-symbols-outlined ps-4 group-hover:translate-x-4 transition-all duration-200 ease-in-out">
                  east
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
