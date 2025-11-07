import db from "@/db";
import { or, ilike, sql } from "drizzle-orm";
import { advocates } from "@/db/schema";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() || "";
  const limit = 20;
  const offset = parseInt(searchParams.get("offset") || "0");
  const searchPattern = `%${query}%`;

  let data;

  if (query) {
    data = await db
      .select()
      .from(advocates)
      .where(
        or(
          ilike(advocates.firstName, searchPattern),
          ilike(advocates.lastName, searchPattern),
          ilike(advocates.city, searchPattern),
          ilike(advocates.degree, searchPattern),
          // Convert specialties JSONB array to text for ilike comparison
          sql`${advocates.specialties}::text ilike ${searchPattern}`
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
