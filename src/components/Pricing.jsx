import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants/index";

const Pricing = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide my-8 text-center">
        Pricing
      </h1>
      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {item.title}
                {item.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    {" "}
                    (Most popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{item.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <div className="flex flex-wrap">
                {item.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center mb-4 mt-4 w-full"
                  >
                    <CheckCircle2 className="mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <h1 className="mt-20 text-xl text-center border border-neutral-500 rounded-xl h-18 bg-gradient-to-r from-orange-500 to-red-600">
                Subscribe
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
