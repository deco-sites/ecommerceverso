import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 606,
  site: "ecommerceverso",
  domains: ["ecommerceverso.deco.site"],
});