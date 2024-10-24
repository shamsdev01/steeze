import { insertWalletToDb } from "@/server/actions/CreateInsertWallet";

export async function POST(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { email } = await req.json();
  if (typeof email != "string") {
    throw new Error("email is invalid");
  }

  try {
    console.log("creating wallet");
    await insertWalletToDb(email);
    return new Response(
      JSON.stringify({ message: "wallet created successfully" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error creating wallet:", error);
    return new Response(JSON.stringify({ error: "Failed to create wallet" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
