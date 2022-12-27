import type { NextApiHandler } from "next";

const appConfig = {
  API_LAYER_API_KEY: process.env.API_LAYER_API_KEY ?? "",
};

const handler: NextApiHandler = (_, response) => {
  response.status(200).json(appConfig);
};

export default handler;
