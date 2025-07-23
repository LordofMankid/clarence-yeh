// pages/api/cloudinary/[...media].ts

import {
  mediaHandlerConfig,
  createMediaHandler,
} from "next-tinacms-cloudinary/dist/handlers";

import { isAuthorized } from "@tinacms/auth";

export const config = mediaHandlerConfig;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export default createMediaHandler({
  cloud_name: requireEnv("CLOUDINARY_CLOUD_NAME"),
  api_key: requireEnv("CLOUDINARY_API_KEY"),
  api_secret: requireEnv("CLOUDINARY_API_SECRET"),
  authorized: async (req, _res): Promise<boolean> => {
    try {
      if (process.env.NODE_ENV === "development") {
        return true;
      }

      const user = await isAuthorized(req);

      return Boolean(user && user.verified);
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});
