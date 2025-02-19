import React from "react";

const Quickstart = () => {
  return (
    <div className="gap-5 h-screen">
      <div className="h-full flex flex-col  items-start gap-12">
        <span className="text-lg font-semibold text-neutral-400">
          QuickStart
        </span>
        <div className="flex w-full flex-col gap-7">
          <h1 className="text-4xl font-semibold">
            Self Hosted installation options
          </h1>
          <div className="w-full h-[2px] rounded-full bg-neutral-800" />
        </div>
        <div className="w-[90%] text-xl flex flex-col gap-10">
          <p>You can choose between the following installation options;</p>
          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>Docker Compose - Recommended option for users.</li>
            <li>Development - Recommended option for developers.</li>
          </ul>
        </div>
        <div className="w-[90%] text-xl flex flex-col gap-10">
          <div className="flex w-full flex-col gap-7">
            <p className="text-4xl font-semibold">Cloud hosting platforms</p>
            <div className="w-full h-[2px] rounded-full bg-neutral-800" />
          </div>
          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>Coolify - recommended if you’re used to Coolify.</li>
          </ul>
        </div>
        <div className="w-[90%] text-xl flex flex-col gap-10">
          <div className="flex w-full flex-col gap-7">
            <p className="text-4xl font-semibold">
              Advanced installation options
            </p>
            <div className="w-full h-[2px] rounded-full bg-neutral-800" />
          </div>
          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>
              Docker (standalone) - Run from the command line with Docker.
            </li>
            <li>Helm - Run with Kubernetes + Helm.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quickstart;
