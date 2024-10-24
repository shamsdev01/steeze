// Function to delete a user in case of failure
"use server";

import { clerkClient } from "@clerk/nextjs/server";

export const deleteUser = async (userId: string) => {
  try {
    await (await clerkClient()).users.deleteUser(userId);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
