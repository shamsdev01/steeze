"use client";
import { signUpWithCredentials } from "@/server/actions/SignUpWithCardentials"; // Make sure this path is correct
import { signIn } from "next-auth/react";
import { useFormState } from "react-dom";
export default function SignUpPage() {
  const initialState = {
    message: null,
  };
  const [state, formAction] = useFormState(
    signUpWithCredentials,
    initialState as unknown as void,
  );
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
      <form action={formAction}>
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      {/* {state. && <p style={{ color: "red" }}>{error}</p>} */}
    </>
  );
}
