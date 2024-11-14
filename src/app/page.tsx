import Form from "@/components/pages/form";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="text-center mx-auto w-[400px]">
        <img src="/logo.png" alt="" width={400} />
      </div>
      <div className="description">
        <h4 className="text-4xl font-bold text-center mb-6 mt-2 text-gray-700 w-[90%] mx-auto pt-10">
          Calculate your company’s annual emissions and make a climate
          protection contribution
        </h4>
        <p className="text-xl mb-16 mt-2 text-gray-700 w-[100%] mx-auto text-center">
          Calculate and make your climate protection contribution in the amount
          of the annual CO2 footprint of your business. Only completed fields
          will be included in the calculation.
        </p>
      </div>

      <Form />
    </div>
  );
}
