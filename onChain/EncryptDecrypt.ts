import crypto from "crypto";

export const encryptPrivateKey = (privateKey: string) => {
  const iv = crypto.randomBytes(16); // 16 bytes IV for AES-256-CTR
  const secretKey = crypto
    .createHash("sha256")
    .update("steezglue_SECRET_KEY")
    .digest(); // Ensure 32-byte key

  const cipher = crypto.createCipheriv("aes-256-ctr", secretKey, iv);

  let encrypted = cipher.update(privateKey, "utf8", "hex");
  encrypted += cipher.final("hex");
  console.log("encrypted", encrypted);
  return { encryptedPrivateKey: encrypted, iv: iv }; // Return encrypted data and IV as hex
};

export const decryptPrivateKey = (encryptedPrivateKey: string, iv: string) => {
  const secretKey = crypto
    .createHash("sha256")
    .update("steezglue_SECRET_KEY")
    .digest(); // Ensure 32-byte key

  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    secretKey,
    Buffer.from(iv, "hex"), // Convert IV back to a buffer from hex string
  );

  let decrypted = decipher.update(encryptedPrivateKey, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};
