import React, { useRef, useState, useEffect } from "react";
import CodeBox from "../codeBox";

const PublicAPI = () => {
  const sections = [
    { title: "Public API allows you to work with Postiz in headless mode", ref: useRef(null) },
    { title: "Get all added integrations", ref: useRef(null) },
    { title: "Upload a new file (from-data)", ref: useRef(null) },
    { title: "Create / update a post", ref: useRef(null) },
    { title: "Delete a post", ref: useRef(null) },
  ];

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = null;
      
      sections.forEach(({ title, ref }) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = title;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <main>
      <div className="gap-5 h-full w-[55dvw]">
        <div className="h-full flex flex-col  items-start gap-14">
          <span className="text-lg font-semibold text-neutral-400">Public API</span>
          <h1 ref={sections[0].ref} className="text-4xl font-semibold">
            Public API allows you to work with Postiz in headless mode
          </h1>
          <div className="flex flex-col gap-28 w-[100%]">
          <div ref={sections[1].ref} className="flex flex-col  gap-5">
            <p className="text-neutral-300 text-2xl font-semibold">
              Get all added integrations
            </p>
            <div className="w-full p-5 rounded-md bg-neutral-950 border border-neutral-600">
              <pre className="flex items-center gap-2">
                <code className="whitespace-pre text-red-400">GET</code>
                <p>https://api.publica.com/public/v1/integrations</p>
              </pre>
            </div>
            <p className="text-lg">Response:</p>
            <CodeBox
              data={{
                endpoint: "GET /integrations",
                response: [
                  {
                    id: "asdfasf2342dsaxfcsf",
                    name: "Nevo David",
                    identifier: "facebook",
                    picture: "https://upload.postiz.com/picture.png",
                    disabled: false,
                    profile: "nevo_david",
                    customer: {
                      id: "asdfasf2342dsaxfcsfsadfsadf",
                      name: "My Customer",
                    },
                  },
                ],
              }}
            />

            <div className="w-full h-[1px] bg-neutral-700 rounded-full mt-5" />
          </div>

          <div ref={sections[2].ref} className="flex flex-col w-full gap-5">
            <p className="text-neutral-300 text-2xl font-semibold">
              Upload a new file (from-data)
            </p>
            <div className="w-full p-5 rounded-md bg-neutral-950 border border-neutral-600">
              <pre className="flex items-center gap-2">
                <code className="whitespace-pre text-red-400">POST</code>
                <p>https://api.publica.com/public/v1/upload</p>
              </pre>
            </div>
            <p className="text-lg">Response:</p>
            <CodeBox
              data={{
                endpoint: "POST /upload",
                payload: { file: "File" },
                response: {
                  id: "e639003b-f727-4a1e-87bd-74a2c48ae41e",
                  name: "vXJYn8EzSB.png",
                  path: "https://uploads.gitroom.com/vXJYn8EzSB.png",
                  organizationId: "85460a39-6329-4cf4-a252-187ce89a3480",
                  createdAt: "2024-12-14T08:18:54.274Z",
                  updatedAt: "2024-12-14T08:18:54.274Z",
                },
              }}
            />

            <div className="w-full h-[1px] bg-neutral-700 rounded-full mt-5" />
          </div>

          <div ref={sections[3].ref} className="flex flex-col w-full gap-5">
            <p className="text-neutral-300 text-2xl font-semibold">
              Create / update a post
            </p>
            <div className="w-full p-5 rounded-md bg-neutral-950 border border-neutral-600">
              <pre className="flex items-center gap-2">
                <code className="whitespace-pre text-red-400">POST</code>
                <p>https://api.publica.com/public/v1/posts</p>
              </pre>
            </div>
            <p className="text-lg">Payload:</p>
            <CodeBox
              data={{
                type: "draft|schedule|now",
                date: "2024-12-14T08:18:54.274Z",
                posts: [
                  {
                    integration: {
                      id: "asdfsad23rwdfasfsddc",
                    },
                    value: [
                      {
                        content: "This is my cool post",
                        id: "Only if you want to edit an existing post",
                        image: [
                          {
                            id: "string",
                          },
                        ],
                      },
                    ],
                    group: "uniqueId for all the posts in the same group",
                    settings: {
                      "[key]":
                        "check each integration DTOs in the files, or wait for the error on a new request",
                    },
                  },
                ],
              }}
            />

            <p className="text-lg">Response:</p>
            <CodeBox
              data={{
                id: "e639003b-f727-4a1e-87bd-74a2c48ae41e",
              }}
            />

            <div className="w-full h-[1px] bg-neutral-700 rounded-full mt-5" />
          </div>

          <div ref={sections[4].ref} className="flex flex-col w-full gap-5">
            <p className="text-neutral-300 text-2xl font-semibold">
              Delete a post
            </p>
            <div className="w-full p-5 rounded-md bg-neutral-950 border border-neutral-600">
              <pre className="flex items-center gap-2">
                <code className="whitespace-pre text-red-400">DELETE</code>
                <p>https://api.publica.com/public/v1/posts/:id</p>
              </pre>
            </div>
            <p className="text-lg">Response:</p>
            <CodeBox
              data={{
                id: "e639003b-f727-4a1e-87bd-74a2c48ae41e",
              }}
            />

            {/* <div className="w-full h-[1px] bg-neutral-700 rounded-full mt-5" /> */}
          </div>
        </div>
          
        </div>
      </div>
      
      <div className="w-[20dvw] left-[77dvw] top-[19dvh] h-full fixed">
        <p className="text-neutral-400 text-lg font-semibold">On this page</p>
        <ul className="mt-4 space-y-2">
          {sections.map(({ title, ref }) => (
            <li key={title}>
              <button
                onClick={() => scrollToSection(ref)}
                className={`text-left w-full px-2 py-1 text-lg transition duration-200 ${
                  activeSection === title ? "text-purple-500" : "text-neutral-400"
                }`}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PublicAPI;
