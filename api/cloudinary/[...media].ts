// /api/cloudinary/[...media].ts
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const {
  mediaHandlerConfig,
  createMediaHandler,
} = require("next-tinacms-cloudinary/dist/handlers");
const { isAuthorized } = require("@tinacms/auth");

export const config = mediaHandlerConfig;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export default createMediaHandler({
  cloud_name: requireEnv("PUBLIC_CLOUDINARY_CLOUD_NAME"),
  api_key: requireEnv("PUBLIC_CLOUDINARY_API_KEY"),
  api_secret: requireEnv("CLOUDINARY_API_SECRET"),
  authorized: async (req, _res) => {
    try {
      if (process.env.NODE_ENV == "development") {
        return true;
      }

      const user = await isAuthorized(req);
      return user?.verified || false;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});
