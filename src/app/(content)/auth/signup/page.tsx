import { signUpWithCredentials } from "@/server/actions/SignUpWithCardentials"; // Make sure this path is correct
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignUpPage() {
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await signUpWithCredentials(email, password);
      // Optionally, you can redirect or show a success message here
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <form>
        <button type="button" onClick={() => signIn("discord")}>
          Sign in with Discord
        </button>
        <button type="button" onClick={() => signIn("google")}>
          Sign in with Google
        </button>
      </form>

      {/* Form for sign up with credentials */}
      <form onSubmit={handleSignUp}>
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
