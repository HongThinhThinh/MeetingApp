"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = "fd62za675hmg";
const apiSecret =
  "bz626pyu6jh5d7hmehhvxtznywsvyamy6y6r89wqktft2ypfaca62s4zahhpj9nh";

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User is not logged in ");
  if (!apiKey) throw new Error("No API key");
  if (!apiSecret) throw new Error("No API secret");

  const client = new StreamClient(apiKey, apiSecret);
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000) - 60;
  const token = client.createToken(user.id, exp, issued);
  return token;
};
