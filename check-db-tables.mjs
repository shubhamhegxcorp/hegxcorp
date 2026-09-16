import postgres from "postgres";

const sql = postgres(
  "postgresql://neondb_owner:npg_po3iFET1xSBA@ep-weathered-shadow-az5ll90y.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
);

async function main() {
  try {
    const tables =
      await sql`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;
    console.log(
      "Tables in Neon:",
      tables.map((t) => t.table_name),
    );

    const hasVisitorEvent = tables.some((t) => t.table_name === "VisitorEvent");
    console.log("VisitorEvent table exists:", hasVisitorEvent);

    if (hasVisitorEvent) {
      const count = await sql`SELECT count(*) FROM "VisitorEvent"`;
      console.log("VisitorEvent rows count:", count[0].count);

      const latest =
        await sql`SELECT id, "visitorId", "eventName", path, "createdAt", params FROM "VisitorEvent" ORDER BY "createdAt" DESC LIMIT 5`;
      console.log("Latest 5 visitor events:");
      for (const row of latest) {
        console.log(
          `- [${row.eventName}] ${row.path} at ${row.createdAt} (source: ${row.params?.lead_source || "none"})`,
        );
      }
    }
  } catch (err) {
    console.error("Database error:", err);
  } finally {
    await sql.end();
  }
}

main();
