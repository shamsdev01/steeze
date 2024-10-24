// app/sign-in/[[...sign-in]]/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import LoginForm from "@/app/(content)/_component/SigninForm";

const Signin = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();

  const signInWithEmail = async ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => {
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        console.log(result);
      }
    } catch (err: unknown) {
      console.log(JSON.stringify(err, null, 2));
      if (err instanceof Error) {
        setClerkError(err.message);
      }
    }
  };

  return (
    <LoginForm signInWithEmail={signInWithEmail} clerkError={clerkError} />
  );
};

export default Signin;
