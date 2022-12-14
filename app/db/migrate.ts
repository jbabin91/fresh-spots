import db from "@/db/db.ts";
import { DenoFileMigrationProvider } from "@/db/migrate-utils.ts";
import { flags as stdFlags, kysely } from "@/deps.ts";

const migrator = new kysely.Migrator({
  db,
  provider: new DenoFileMigrationProvider(),
});

function _logMigrationResults(
  results?: kysely.MigrationResult[],
  error?: Error,
) {
  results?.forEach((res) => {
    if (res.status === "Success") {
      console.log(
        `[Migrations] ✅ ${res.migrationName} was executed successfully`,
      );
    } else {
      console.log(`[Migrations] ❌ ${res.migrationName} failed to execute`);
    }
  });

  if (error) {
    console.log(`[Migrations] ❌ Failed to migrate`);
    throw new Error(error.message);
  }
}

const flags = stdFlags.parse(Deno.args, {
  boolean: ["up", "down"],
});

if (!flags.up && !flags.down) {
  throw new Error("up or down flag missing");
}

if (flags.up && flags.down) {
  throw new Error("Can only migrate up or down... not both");
}

if (flags.up) {
  const { error, results } = await migrator.migrateToLatest();
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
}

if (flags.down) {
  const { error, results } = await migrator.migrateDown();
  console.log(error);
  console.log(results);
}
