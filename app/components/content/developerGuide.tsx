import React from "react";

const DeveloperGuide = () => {
  return (
    <div className="gap-5">
      <div className="h-full flex flex-col  items-start gap-12">
        <span className="text-lg font-semibold text-neutral-400">
          Developer Guide
        </span>
        <div className="flex w-full flex-col gap-7">
          <h1 className="text-4xl font-semibold">
            Understand how to develope with Publica
          </h1>
          <div className="w-full h-[2px] rounded-full bg-neutral-800" />
        </div>
        <div className="w-[90%] text-xl flex flex-col gap-10">
          <div className="flex w-full flex-col gap-7">
            <p className="text-4xl font-semibold">Cloud hosting platforms</p>
            <div className="w-full h-[2px] rounded-full bg-neutral-800" />
          </div>
          <p>This page explains How to setup your development environment.</p>
        </div>
        <div className="w-[90%] text-xl flex flex-col gap-10">
          <div className="flex w-full flex-col gap-7">
            <p className="text-4xl font-semibold">Architecture Overview</p>
            <div className="w-full h-[2px] rounded-full bg-neutral-800" />
          </div>
          <p>
            Before getting started with development, have a good read of the
            architecture overview. This will give you a good understanding of
            how the project is structured and how the different parts of the
            project interact with each other.
          </p>
        </div>
        <div className="w-[90%] text-xl flex flex-col gap-10">
          <div className="flex w-full flex-col gap-7">
            <p className="text-4xl font-semibold">Repository Overview</p>
            <div className="w-full h-[2px] rounded-full bg-neutral-800" />
          </div>
          <p>
            Postiz is an open-source project, and the source code is available
            on GitHub.
          </p>

          <p>
            The project is generally built using scripts in the package.json
            file with npm. The main scripts are:
          </p>

          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>npm run dev - Starts the development server</li>
            <li>npm run prisma-generate - Generates the Prisma client</li>
            <li>
              npm run prisma-db-push - Pushes the database schema to the
              database
            </li>
          </ul>

          <p>
            The entire project is built under NX to have a monorepo with
            multiple projects.
          </p>

          <p>
            Unlike other NX project, this project has one .env file that is
            shared between all the apps. It makes it easier to develop and
            deploy the project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperGuide;
