import React, { useEffect, useState } from "react";
import InputBox from "../calculator/inputBox";
import useStorage from "@/hooks/useStorage";
import Loader from "../calculator/loader";

function Step7() {
  const [loading, setLoading] = useState(true);
  const [uses, setUses] = useState(60);
  const { getSavedNumber, saveToLocalStorage } = useStorage();

  useEffect(() => {
    setUses(getSavedNumber("uses", 60));

    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h4 className="flex items-start text-2xl font-semibold text-[#333]">
            <span
              className="material-symbols-outlined pe-4"
              style={{ fontSize: "30px", color: "#186EC4" }}
            >
              help
            </span>
            Please estimate the average number of uses textiles have before
            withdrawn from service from either loss or damage.
          </h4>
          <InputBox
            styles="mt-10 mx-[4%] w-[22%]"
            placeholder="60"
            text="Number of uses"
            value={uses}
            onChange={(e: any) => {
              setUses(e);
              saveToLocalStorage("uses", e);
            }}
          />
        </>
      )}
    </div>
  );
}

export default Step7;
