import db from "@/db";
import { or, sql } from "drizzle-orm";
import { advocates } from "@/db/schema";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() || "";
  const limit = 20;
  const offset = parseInt(searchParams.get("offset") || "0");
  const searchTerm = `%${query.toLowerCase()}%`;

  let data;

  if (query) {
    data = await db
      .select()
      .from(advocates)
      .where(
        or(
          sql`LOWER(${advocates.firstName}) LIKE ${searchTerm}`,
          sql`LOWER(${advocates.lastName}) LIKE ${searchTerm}`,
          sql`LOWER(${advocates.city}) LIKE ${searchTerm}`,
          sql`LOWER(${advocates.degree}) LIKE ${searchTerm}`,
          sql`${advocates.yearsOfExperience}::text LIKE ${searchTerm}`
        )
      )
      .limit(limit)
      .offset(offset);
  } else {
    data = await db.select().from(advocates).limit(limit).offset(offset);
  }

  return Response.json({
    data,
    hasMore: data.length === limit,
  });
}
