import db, { jsonb_agg } from "../db.ts";

export async function findOne(
  listId: string,
  userId?: number,
  withSpots = true,
) {
  let query = db.selectFrom("spot_list").selectAll().where("id", "=", listId);

  if (userId) {
    query = query.where("user_id", "=", userId);
  } else {
    query = query.where("published", "=", true);
  }

  if (withSpots) {
    query = query.select((qb) =>
      jsonb_agg(
        // @ts-ignore: kysely doesn't know about jsonb_agg
        qb
          .selectFrom("spot")
          .selectAll()
          .whereRef("spot.list_id", "=", "spot_list.id"),
      ).as("spots"),
    );
  }

  const lists = await query.executeTakeFirst();
  return lists;
}

export async function findAll(userId: number) {
  const lists = await db
    .selectFrom("spot_list")
    .selectAll()
    .where("user_id", "=", userId)
    .orderBy("updated_at", "desc")
    .execute();
  return lists;
}
