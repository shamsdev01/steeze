// app/sign-up/[[...sign-up]]/page.tsx
"use client";
import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import VerifyForm from "@/app/(content)/_component/VerifyForm";
import SignUpForm from "../../_component/SignUpForm";
import CreateWalletOnSignUp from "@/server/actions/CreateInsertWallet";
import { deleteUser } from "@/server/actions/deleteUser";

type ClerkError = {
  status: string;
  clerkError: boolean;
  errors: [
    {
      code: string;
      message: string;
      longMessage: string;
      meta: {
        paramName: string;
      };
    },
  ];
};
const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [clerkError, setClerkError] = useState<string | null>(null);
  const router = useRouter();
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");

  const signUpWithEmail = async ({
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
      await signUp.create({
        emailAddress: emailAddress,
        password: password,
      });
      // send the email.
      console.log("Creating user");
      // change the UI to our pending section.
      setVerifying(true);

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
    } catch (err: unknown) {
      console.log(JSON.stringify(err, null, 2));
      if ((err as ClerkError).clerkError) {
        const clerkErr = err as ClerkError;
        setClerkError(clerkErr.errors[0].message);
      } else {
        console.log(err);
        setClerkError("An unexpected error occurred during sign up");
      }
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    console.log("verifuing user");

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        console.log(
          JSON.stringify(completeSignUp, null, 2),
          "notcomplete...............",
        );
      }

      if (completeSignUp.status === "complete") {
        // If email verification succeeds, attempt wallet creation

        console.log(
          "Email verification completed successfully:",
          JSON.stringify(completeSignUp, null, 2),
        );

        // Attempt wallet creation
        try {
          await CreateWalletOnSignUp(completeSignUp.emailAddress!);

          console.log("Wallet creation successful");

          await setActive({ session: completeSignUp.createdSessionId });
          router.push("/dashboard");
        } catch (walletError) {
          console.error("Wallet creation failed", walletError);

          // Rollback user creation if wallet creation fails
          await deleteUser(completeSignUp.id!);

          // Inform the user of the failure
          setClerkError("Wallet creation failed. Please try again.");
          throw new Error("Wallet creation failed");
        }
      }
    } catch (err) {
      console.error("Error during email verification:", err);
      setClerkError("Failed to verify your email. Please try again.");
      throw err;
    }
  };

  return (
    <>
      {!verifying ? (
        <SignUpForm signUpWithEmail={signUpWithEmail} clerkError={clerkError} />
      ) : (
        <VerifyForm handleVerify={handleVerify} code={code} setCode={setCode} />
      )}
    </>
  );
};

export default Signup;
