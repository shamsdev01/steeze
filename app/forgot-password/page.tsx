'use client';
import { auth } from '@/lib/firebase';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sendPasswordResetEmail } from 'firebase/auth';
import Logo from '@/assets/images/crypto-steeze_logo.png';
import Reset from '@/assets/images/reset.png';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset link sent. Check your email.');
      setEmail('');
    } catch (error) {
      setMessage('Failed to send reset link. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1E35] flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="text-[#39F0C1]">
          <Image src={Logo} alt="Company Logo" width={100} height={100} />
        </div>
        <Link href="/help" className="text-white hover:text-[#39F0C1]">
          Need Help?
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16"> {/* Increased space-x */}
          <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"> {/* Increased image size */}
            <Image
              src={Reset}
              alt="Reset Icon"
              width={900} /* Increased width */
              height={900} /* Increased height */
              className="animate-pulse max-w-full h-auto"
            />
          </div>

          <div className="max-w-lg w-full space-y-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-white">
                Reset Your Password
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                Enter the email address associated with your account, and we will send a link to reset your password.
              </p>
            </div>

            <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {message && (
                <p
                  className="text-sm text-center md:text-left"
                  style={{ color: message.includes('sent') ? '#4CAF50' : '#F44336' }}
                >
                  {message}
                </p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0047AB] hover:bg-[#003380] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0047AB] disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>

      <footer className="p-4 flex justify-start space-x-6">
        <Link href="#" className="text-white hover:text-[#39F0C1]">
          Privacy
        </Link>
        <Link href="#" className="text-white hover:text-[#39F0C1]">
          Terms
        </Link>
      </footer>
    </div>
  );
};

export default ResetPassword;
