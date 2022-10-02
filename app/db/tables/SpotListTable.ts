import { z } from "@/deps.ts";

import SpotTable from "@/db/tables/SpotTable.ts";
import { generatedString, timestamps } from "@/db/zod-utils.ts";

const SpotListValidators = {
  name: z.string(),
  description: z.string(),
};

// TODO: better naming for DTO

export const SpotList = z.object(SpotListValidators);
export type SpotList = z.infer<typeof SpotList>;

export const SpotListWithIdAndSpots = z.object({
  id: z.string(),
  ...SpotListValidators,
  spots: z.array(SpotTable),
});
export type SpotListWithIdAndSpots = z.infer<typeof SpotListWithIdAndSpots>;

const SpotListTable = z.object({
  id: generatedString(),
  ...SpotListValidators,
  public: z.boolean(),
  published: z.boolean(),
  user_id: z.number(),
  ...timestamps(),
});

type SpotListTable = z.infer<typeof SpotListTable>;

export default SpotListTable;
