import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

export const getWebsiteSection = createServerFn({ method: "POST" })
  .validator(z.object({ key: z.string() }))
  .handler(async ({ data }) => {
    const { getWebsiteSection: get } = await import("./website-content.server");
    return get(data.key);
  });

export const saveWebsiteSection = createServerFn({ method: "POST" })
  .validator(z.object({ key: z.string(), value: z.any() }))
  .handler(async ({ data }) => {
    const { saveWebsiteSection: save } = await import("./website-content.server");
    return save(data.key, data.value);
  });

export const listWebsiteSections = createServerFn({ method: "POST" }).handler(async () => {
  const { listWebsiteSections: list } = await import("./website-content.server");
  return list();
});
