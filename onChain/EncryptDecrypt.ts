import crypto from "crypto";

export const encryptPrivateKey = (privateKey: string) => {
  const iv = crypto.randomBytes(16); // Store this for decryption
  const cipher = crypto.createCipheriv(
    "aes-256-ctr",
    "steezglue_SECRET_KEY", // Secret encryption key
    iv,
  );
  let encrypted = cipher.update(privateKey, "utf8", "hex");
  encrypted += cipher.final("hex");
  return { encryptedPrivateKey: encrypted, iv }; // Return both encrypted data and IV
};

export const decryptPrivateKey = (encryptedPrivateKey: string, iv: string) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    "steezglue_SECRET_KEY",
    Buffer.from(iv, "hex"), // Convert IV back to a buffer from the hex string
  );
  let decrypted = decipher.update(encryptedPrivateKey, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
