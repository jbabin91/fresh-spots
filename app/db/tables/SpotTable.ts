import { z } from "@/deps.ts";

import { generatedNumber, timestamps } from "@/db/zod-utils.ts";

export const Spot = z.object({
  name: z.string().min(1, "Name required."),
  list_id: z.string(),
  user_id: z.number(),
  description: z.string().min(1, "Description required."),
  latitude: z.number(),
  longitude: z.number(),
});

const SpotTable = Spot.extend({
  id: generatedNumber(),
  ...timestamps(),
});

export type Spot = z.infer<typeof Spot>;
type SpotTable = z.infer<typeof SpotTable>;

export default SpotTable;
