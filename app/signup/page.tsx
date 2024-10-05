'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '@/lib/firebase'; // Update this import path as needed
import SignupBg from '@/assets/images/Signup screen.png'
import BitcoinLogo from '@/assets/images/BitcoinLogo.png'
import Steeze from '@/assets/images/crypto-steeze_logo.png'

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with name
      await updateProfile(user, {
        displayName: name
      });

      router.push('/login?message=Account created successfully');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative">
      <Image
        src={SignupBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="z-10 w-full max-w-6xl p-4 md:p-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 flex items-center justify-center">
          <Image
            src={BitcoinLogo}
            alt="Bitcoin Logo"
            width={400}
            height={400}
            className="animate-pulse max-w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
          <div className="absolute top-4 left-4">
            <Image
              src={Steeze}
              alt="Company Logo"
              width={80}
              height={80}
            />
          </div>

          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Welcome</h2>
            <p className="mt-2 text-sm md:text-base text-gray-300">Please input your details to create an account</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
            <div>
              <input
                required
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 bg-transparent text-white border-b border-teal-500 focus:outline-none focus:border-teal-300"
              />
            </div>

            <div>
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 bg-transparent text-white border-b border-teal-500 focus:outline-none focus:border-teal-300"
              />
            </div>

            <div>
              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 bg-transparent text-white border-b border-teal-500 focus:outline-none focus:border-teal-300"
              />
            </div>

            <div>
              <input
                required
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-3 bg-transparent text-white border-b border-teal-500 focus:outline-none focus:border-teal-300"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
              <Link href="/login" className="flex-1">
                <button type="button" className="w-full border border-white text-white p-3 rounded-md hover:bg-white hover:text-navy-900 transition duration-200">
                  Login
                </button>
              </Link>
            </div>
          </form>

          <div className="flex justify-start space-x-4 text-gray-400 text-xs md:text-sm">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}