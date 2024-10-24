// "use server";

// import { signIn } from "next-auth/react";
// import { createUser, insertWallet } from "./CreateUserInsertWallet";

// // Define the user interface for creating the user

// /**
//  * Validates form data.
//  * @param {email,password}  - Data submitted by the user
//  * @throws Will throw an error if validation fails
//  */
// function validateFormData({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) {
//   if (!email || !password) {
//     throw new Error("Email and password are required.");
//   }
//   // Add additional validation as needed (e.g., email format, password strength)
// }

// /**
//  * Handles user signup with provided credentials.
//  * @param {string} email - User's email
//  * @param {string} password - User's password
//  * @throws Will throw an error if the user creation or wallet insertion fails
//  */

// export async function signUpWithCredentials(
//   state: void,
//   formData: FormData,
// ): Promise<void> {
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   try {
//     // Validate form data
//     validateFormData({ email, password });

//     // Create user and get the user ID
//     const userId = await createUser({ email, password }, {});

//     if (!userId) {
//       throw new Error("Failed to create user.");
//     }

//     // Insert the wallet associated with the user
//     await insertWallet(userId);
//   } catch (error) {
//     console.error("Error during signup:", error);
//     if (error instanceof Error) {
//       throw new Error(`Sign-up failed: ${error.message}`);
//     } else {
//       throw new Error("Sign-up failed: An unknown error occurred.");
//     }
//   }
// }

// export async function signInWithCredentials(formData: FormData) {
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;
//   await signIn("credentials", {
//     email: email,
//     password: password,
//   });
// }
