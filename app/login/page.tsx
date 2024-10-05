'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/lib/firebase';
import LogoImage from '@/assets/images/crypto-steeze_logo.png';
import PadlockImage from '@/assets/images/padlock.png';
import loginBg from '@/assets/images/loginBg.png';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/wallet');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center relative">
      <div className="absolute inset-0">
        <Image
          src={loginBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />
      </div>
      
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="z-10 w-full max-w-6xl p-4 md:p-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 flex items-center justify-center">
          <Image
            src={PadlockImage}
            alt="Bitcoin Logo"
            width={600}
            height={600}
            className="animate-pulse max-w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
          <div className="absolute top-4 left-4">
            <Image
              src={LogoImage}
              alt="Company Logo"
              width={80}
              height={80}
            />
          </div>

          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Welcome</h2>
            <p className="mt-2 text-sm md:text-base text-gray-300">Please input your details to create an account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="text-right">
              <Link href="/forgot-password" className="text-gray-400 hover:text-white text-sm">
                Forgot Password?
              </Link>
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
              <Link href="/signup" className="flex-1">
                <button 
                  type="button" 
                  className="w-full py-2 px-4 border border-white/20 text-white rounded-md hover:bg-white/10 transition-colors"
                >
                  Register
                </button>
              </Link>
            </div>
          </form>


          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}