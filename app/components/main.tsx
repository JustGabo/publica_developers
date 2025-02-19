"use client"
import React, { useState } from "react";
import PublicAPI from "./content/publicAPI";
import Introduction from "./content/introduction";
import Quickstart from "./content/quickstart";
import DeveloperGuide from "./content/developerGuide";
const data = {
  publicAPI: {
    id: 1,
    title: "Public API",
    content: <PublicAPI />,
  },
  introduction: {
    id: 2,
    title: "Introduction",
    content: <Introduction />
  },
  quickStart: {
    id: 3,
    title: "Quickstart",
    content: <Quickstart />
  },
  developerGuide: {
    id: 4,
    title: "Developer Guide",
    content: <DeveloperGuide />
  },
};

type DataKeys = keyof typeof data;

const Main = () => {
  const [selectedKey, setSelectedKey] = useState<DataKeys>("publicAPI");
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[16dvw]  fixed  text-white">
        {Object.entries(data).map(([key, { title }]) => (
          <button
            key={key}
            className={`block w-full my-2 text-left px-3 py-2 hover:bg-purple-700/20  text-lg font-semibold transition duration-200 rounded-md ${
              selectedKey === key ? "bg-purple-500/10" : ""
            }
            ${selectedKey === key ? "text-purple-600" : "text-neutral-500"}
            `}
            onClick={() => setSelectedKey(key as DataKeys)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="ml-[18dvw] w-[57dvw] pb-10">
        <div className="mt-4">{data[selectedKey].content}</div>
      </div>

      <div className="w-[16dvw] right-0 top-0 h-full flex fixed items-center justify-center">
        <p>Content</p>
      </div>
    </div>
  );
};

export default Main;
