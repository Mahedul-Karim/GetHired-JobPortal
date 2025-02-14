import { Check } from "lucide-react";
import React from "react";

const HOW_IT_WORKS_LIST = [
  {
    id: 1,
    text: "Trusted and Quality Jobs",
  },
  {
    id: 2,
    text: "International Job",
  },
  {
    id: 3,
    text: "No Extra Charge",
  },
  {
    id: 4,
    text: "Top Companies",
  },
];

const HowItWorks = () => {
  return (
    <section className="grid md:grid-cols-[0.6fr_1fr] gap-6">
      <div className="flex flex-col gap-4 justify-center">
        <p className="text-primary font-semibold">How It Works</p>
        <h1 className="font-semibold text-dark-1 text-3xl lg:text-5xl lg:leading-[55px]">
          Follow our steps we will help you.
        </h1>
        <ul className="space-y-4">
          {HOW_IT_WORKS_LIST.map((list) => (
            <li
              key={list.id}
              className="flex items-center gap-4 font-medium text-dark-1"
            >
              <span>
                <Check className="stroke-primary" />
              </span>{" "}
              {list.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid xs:grid-cols-2 gap-4 md:gap-10 lg:gap-16 place-items-center">
        <div
          style={{ backgroundColor: "rgb(124, 181, 234)" }}
          className="md:max-w-[250px] md:-translate-y-5 md:aspect-[16/12] rounded-lg px-4 py-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end gap-2 md:-translate-x-[60px]">
            <div
              className="p-4 bg-white rounded-lg w-max grid place-items-center"
              style={{ boxShadow: "rgba(56, 152, 226, 0.4) -5px 10px 25px" }}
            >
              <img
                src="/assets/icon1.png"
                alt=""
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-dark-2 w-full">
              Register <br /> Your Account
            </h3>
          </div>
          <p className="text-sm pt-4 text-gray-700">
            You need to create an account to find the best and preferred job.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#eac87c" }}
          className="md:max-w-[250px]  md:aspect-[16/12] rounded-lg px-4 py-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end gap-2 md:-translate-x-[60px]">
            <div
              className="p-4 bg-white rounded-lg w-max grid place-items-center"
              style={{ boxShadow: "rgba(56, 152, 226, 0.4) -5px 10px 25px" }}
            >
              <img
                src="/assets/icon4.png"
                alt=""
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-dark-2 w-full">
              Search <br /> Your Job
            </h3>
          </div>
          <p className="text-sm pt-4 text-gray-700">
            You need to create an account to find the best and preferred job.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#cea7d9" }}
          className="md:max-w-[250px] md:-translate-y-5 md:aspect-[16/12] rounded-lg px-4 py-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end gap-2 md:-translate-x-[60px]">
            <div
              className="p-4 bg-white rounded-lg w-max grid place-items-center"
              style={{ boxShadow: "rgba(56, 152, 226, 0.4) -5px 10px 25px" }}
            >
              <img
                src="/assets/icon3.png"
                alt=""
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-dark-2 w-full">
              Apply<br />For Dream Job
            </h3>
          </div>
          <p className="text-sm pt-4 text-gray-700">
            You need to create an account to find the best and preferred job.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#8be3c6" }}
          className="md:max-w-[250px]  md:aspect-[16/12] rounded-lg px-4 py-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end gap-2 md:-translate-x-[60px]">
            <div
              className="p-4 bg-white rounded-lg w-max grid place-items-center"
              style={{ boxShadow: "rgba(56, 152, 226, 0.4) -5px 10px 25px" }}
            >
              <img
                src="/assets/icon3.png"
                alt=""
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-dark-2 w-full">
              Upload <br /> Your Resume
            </h3>
          </div>
          <p className="text-sm pt-4 text-gray-700">
            You need to create an account to find the best and preferred job.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
