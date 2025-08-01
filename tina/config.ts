import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    // tina: {
    //   mediaRoot: "",
    //   publicFolder: "public",
    // },

    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "blogs",
        label: "Blogs",
        path: "src/content/blogs",
        format: "mdx",

        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail Image",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "SectionTitle",
                label: "Section Title",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "boolean",
                    name: "notBlock",
                    label: "Not Block Style?",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "project",
        label: "Projects",
        path: "src/content/projects",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "dateRange",
            label: "Date Range",
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Published On",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "techStack",
            label: "Tech Stack",
            list: true,
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "SectionTitle",
                label: "Section Title",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "boolean",
                    name: "notBlock",
                    label: "Not Block Style?",
                  },
                ],
              },
              {
                name: "CldImage",
                label: "Image",
                fields: [{ type: "image", name: "image" }],
              },
            ],
          },
        ],
      },
    ],
  },
});
