import type { Metadata } from "next";

/**
 *
 * @todo - The metadata for the login page
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "steezglue-login",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
  };
}

export default function LoginPage() {
  return <div>LoginPage</div>;
}