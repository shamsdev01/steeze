import crypto from "crypto";

export const encryptPrivateKey = (privateKey: string) => {
  const cipher = crypto.createCipheriv(
    "aes-256-ctr",
    "steezglue_SECRET_KEY", //this is the secrect encyption key
    crypto.randomBytes(16),
  );
  let encrypted = cipher.update(privateKey, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};
