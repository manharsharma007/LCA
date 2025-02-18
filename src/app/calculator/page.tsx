"use client";
import Progressbar from "@/components/calculator/progressBar";
import React, { useState } from "react";
import Link from "next/link";
import "material-symbols";
import Step1 from "@/components/pages/step1";
import Step2 from "@/components/pages/step2";
import Step3 from "@/components/pages/step3";
import Step4 from "@/components/pages/step4";
import Step5 from "@/components/pages/step5";
import Step6 from "@/components/pages/step6";
import Step7 from "@/components/pages/step7";
import Step8 from "@/components/pages/step8";

const pages = [
  "Manufacturing",
  "Transportation from Supplier",
  "Washing Process",
  "Detergent Usage",
  "Drying Process",
  "Transportation to Healthcare",
  "Number of Uses",
  "End of Life",
];

const Calculator = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="container mx-auto my-10">
      <div className="mx-auto">
        <div className="flex flex-col justify-between gap-4 text-center content-center items-center">
          <Progressbar
            width={((page / 8) * 100).toFixed(2)}
            total="8"
            step={page}
          />
        </div>
        <Link href={"/"}>
          <button className="bg-white text-[#444] absolute top-[20px] right-[20px] m-0 p-0">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "36px", color: "#024C96" }}
            >
              cancel
            </span>
          </button>
        </Link>
      </div>

      <div className="w-[80%] mx-auto relative mt-[10%] mb-[100px]">
        {(() => {
          switch (page) {
            case 2:
              return <Step2 />;
            case 3:
              return <Step3 />;
            case 4:
              return <Step4 />;
            case 5:
              return <Step5 />;
            case 6:
              return <Step6 />;
            case 7:
              return <Step7 />;
            case 8:
              return <Step8 />;
            default:
              return <Step1 />;
          }
        })()}
      </div>

      <div
        className={`container flex ${
          page < 2 ? "justify-end" : "justify-between"
        } fixed bottom-20 left-[50%] translate-x-[-50%]`}
      >
        {page > 1 && (
          <button
            onClick={() => setPage((p) => p - 1)}
            type="button"
            className="text-white bg-[#186EC4] hover:bg-[#024C96] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="material-symbols-outlined pe-4">
              arrow_circle_left
            </span>
            Previous
          </button>
        )}
        {page < 8 && (
          <button
            type="button"
            onClick={() => setPage((p) => p + 1)}
            className="text-white bg-[#186EC4] hover:bg-[#024C96] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
            <span className="material-symbols-outlined ps-4">
              arrow_circle_right
            </span>
          </button>
        )}
        {page == 8 && (
          <Link href={"report"}>
            <button
              type="button"
              className="text-white bg-[#186EC4] hover:bg-[#024C96] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Finish
              <span className="material-symbols-outlined ps-4">trophy</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Calculator;
