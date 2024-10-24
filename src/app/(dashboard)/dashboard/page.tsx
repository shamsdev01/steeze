// app/page.tsx
"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex h-screen flex-col content-center items-center gap-4 text-center">
      <h1 className="mt-4 text-2xl">Hello!</h1>
      {isSignedIn && <h1 className="text-2xl">You are logged in!</h1>}
      <div className="align-center flex justify-center">
        {!isSignedIn ? (
          <div className="flex gap-2">
            <div className="mb-6 rounded-md bg-slate-700 px-3 py-2 text-xl font-light text-white hover:bg-white hover:text-blue-900">
              <Link href="/sign-up" className="self-center">
                Signup
              </Link>
            </div>
            <div className="mb-6 rounded-md bg-slate-700 px-3 py-2 text-xl font-light text-white hover:bg-white hover:text-blue-900">
              <Link href="/sign-in" className="self-center">
                Login
              </Link>
            </div>
          </div>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
}
