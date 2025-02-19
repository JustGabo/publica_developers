import React from "react";

const Introduction = () => {
  return (
    <div className="gap-5 h-screen">
      <div className="h-full flex flex-col  items-start gap-12">
        <span className="text-lg font-semibold text-neutral-400">
          Public API
        </span>
        <div className="flex w-full flex-col gap-7">
        <h1 className="text-4xl font-semibold">
          What is Publica?
        </h1>
        <div className="w-full h-[2px] rounded-full bg-neutral-800"/>
        </div>
        <div className="w-[90%] text-xl flex flex-col gap-10">
            <p>
            Postiz helps you to manage all your social media accounts.
            </p>
          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>Schedule social media and articles.</li>
            <li>Generate posts with AI</li>
            <li>Exchange or buy posts from other members on the marketplace.</li> 
          </ul>
        </div>

        <div className="flex items-center justify-between w-full gap-5">
          <div className="rounded-lg text-xl font-semibold w-full border border-neutral-700 p-4 h-[100px]">
            <p>
            Learn how to install the project and start using it
            </p>
          </div>
          <div className="rounded-lg text-xl font-semibold w-full border border-neutral-700 p-4 h-[100px]">
            <p>
            Learn how to install the project and start using it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
