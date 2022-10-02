import db from "@/db/db.ts";
import { Spot } from "@/db/tables/SpotTable.ts";

export function createOne(spot: Spot) {
  return db
    .insertInto("spot")
    .values(spot)
    .returningAll()
    .executeTakeFirstOrThrow();
}
