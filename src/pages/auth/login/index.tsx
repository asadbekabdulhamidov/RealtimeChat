import { Button } from '../../../components/ui/button';
// react imports
import { useState } from 'react';

// icons
import { FcGoogle } from 'react-icons/fc';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* HEADER */}
      <div className="text-center mb-6 max-w-md">
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
          F
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          Welcome back to your workspace
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Enter your credentials to access your curated focus sanctuary.
        </p>
      </div>

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-sm">
        {/* ERROR */}
        {/* <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 mb-4">
          <p className="font-medium">Authentication failed</p>
          <p>
            The password you entered is incorrect. Please try again or reset
            your password.
          </p>
        </div> */}

        {/* FORM */}
        <form className="space-y-4">
          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600">Email address</label>
            <input
              type="email"
              placeholder="johnDoe@example.com"
              className="w-full mt-1 border rounded-lg px-3 py-2 bg-gray-50 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm text-gray-600">Password</label>
              <span className="text-xs text-indigo-500 cursor-pointer">
                Forgot password?
              </span>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full mt-1 border border-red-300 rounded-lg px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {/* EYE BUTTON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* CHECKBOX */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <input type="checkbox" />
            <span>Keep me logged in for 30 days</span>
          </div>

          {/* BUTTON */}
          <Button className="w-full bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-500 text-white">
            Login
          </Button>
        </form>

        {/* DIVIDER */}
        <div className="text-center text-xs text-gray-400 my-4">
          OR CONTINUE WITH
        </div>

        {/* SOCIAL */}
        <div className="flex gap-2">
          <button className="w-full border rounded-lg py-2 text-sm flex gap-3 cursor-pointer  items-center justify-center hover:bg-gray-50">
            <FcGoogle className="w-5 h-5" />
            <span> Google</span>
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <span className="text-indigo-500 cursor-pointer font-medium">
            Create an account
          </span>
        </p>
      </div>

      {/* BOTTOM LINKS */}
      <div className="flex gap-6 text-xs text-gray-400 mt-6">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>System Status</span>
      </div>
    </div>
  );
};

export default LoginPage;
