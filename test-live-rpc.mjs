import { toJSONAsync } from "seroval";
import { getDefaultSerovalPlugins } from "@tanstack/start-client-core";

async function test() {
  const payloadToSerialize = {
    data: {
      email: "rajeshsahani3455@gmail.com",
      password: "hegxcorp",
    },
  };
  const serialized = JSON.stringify(await toJSONAsync(payloadToSerialize));
  console.log("Serialized body:", serialized);

  const res = await fetch(
    "https://hegxcorp.com/_serverFn/b30f690c7c4db6ee5c0d491cd43f1c8eb07322a9bac537eba1f13ddbb4f26745",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-tsr-serverfn": "true",
        accept: "application/json",
      },
      body: serialized,
    },
  );

  console.log("HTTP Status:", res.status);
  console.log("HTTP Headers:", Object.fromEntries(res.headers.entries()));
  const text = await res.text();
  console.log("Raw Response Body:", text);
}

test().catch(console.error);
