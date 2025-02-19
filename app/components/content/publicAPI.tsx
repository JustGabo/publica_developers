import React from 'react'
import CodeBox from '../codeBox'

const PublicAPI = () => {
  return (
    <div className="gap-5 h-full">
      <div className="h-full flex flex-col  items-start gap-14">
        <span className="text-lg font-semibold text-neutral-400">Public API</span>
        <h1 className="text-4xl font-semibold">
          Public API allows you to work with Postiz in headless mode
        </h1>
        <div className="w-[90%] text-xl flex flex-col gap-10">
          <p className="leading-7 font-medium text-neutral-400">
            To use the Public API, go to Postiz settings and copy the API Key.
            With each request, you need to pass the API Key in the header
            Authorization. If you are using the hosted version of Postiz, the
            URL will be <code>https://api.postiz.com/public/v1</code>. If you are
            self-hosting Postiz, the URL will be <code>/public/v1</code>.
          </p>
          <span className="text-neutral-400 underline">
            There is a limit of 30 requests per hour.
          </span>
          <span className="text-neutral-300">
            Here are the following API endpoints you can use:
          </span>
        </div>
        
        {/* Get all added integrations */}
        <CodeBox data={{
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
                name: "My Customer"
              }
            }
          ]
        }}/>

        {/* Upload a new file */}
        <CodeBox data={{
          endpoint: "POST /upload",
          payload: { file: "File" },
          response: {
            id: "e639003b-f727-4a1e-87bd-74a2c48ae41e",
            name: "vXJYn8EzSB.png",
            path: "https://uploads.gitroom.com/vXJYn8EzSB.png",
            organizationId: "85460a39-6329-4cf4-a252-187ce89a3480",
            createdAt: "2024-12-14T08:18:54.274Z",
            updatedAt: "2024-12-14T08:18:54.274Z"
          }
        }}/>

        {/* Post list */}
        <CodeBox data={{
          endpoint: "GET /posts",
          queryParams: {
            display: "day | week | month",
            day: "0-6",
            week: "1-52",
            month: "1-12",
            year: "2022+"
          },
          response: {
            posts: [
              {
                id: "cm4gklk8o00008copo77fa0f8",
                content: "blabla",
                publishDate: "2024-12-09T05:06:00.000Z",
                releaseURL: "https://twitter.com/nevodavid/status/1865986385708204316",
                state: "QUEUE | PUBLISHED | ERROR | DRAFT",
                integration: {
                  id: "cm4ean69r0003w8w1cdomox9n",
                  providerIdentifier: "x",
                  name: "Nevo David",
                  picture: "https://uploads.gitroom.com/5g9mEIVCAq.jpeg"
                }
              }
            ]
          }
        }}/>

        {/* Create / Update a post */}
        <CodeBox data={{
          endpoint: "POST /posts",
          payload: {
            type: "draft | schedule | now",
            date: "2024-12-14T08:18:54.274Z",
            posts: [
              {
                integration: {
                  id: "asdfsad23rwdfasfsddc"
                },
                value: [
                  {
                    content: "This is my cool post",
                    id: "Only if you want to edit an existing post",
                    image: [{ id: "string" }]
                  }
                ],
                group: "uniqueId for all the posts in the same group",
                settings: { "[key]": "check each integration DTOs in the files" }
              }
            ]
          },
          response: {
            id: "e639003b-f727-4a1e-87bd-74a2c48ae41e"
          }
        }}/>

        {/* Delete a post */}
        <CodeBox data={{
          endpoint: "DELETE /posts/:id",
          response: {
            id: "e639003b-f727-4a1e-87bd-74a2c48ae41e"
          }
        }}/>
      </div>
     
    </div>
  )
}

export default PublicAPI