import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="w-full max-w-xs mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
        {/* Input Field from here */}
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="
            name"
          >
            Name
          </label>
          <input
            class="shadow border-4 border-gray-400  hover:border-red-500 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            class="shadow border-4 border-gray-400  hover:border-red-500 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border-4 border-gray-400 hover:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
            required
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>

        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="photourl"
          >
            Photo URL
          </label>
          <input
            class="shadow appearance-none border-4 border-gray-400 hover:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            type="text"
            name="photo"
            placeholder="URL"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="  animate-bounce bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <p className="text-center py-2">
          Registered Already? <br />
          <Link className="link font-bold text-red-500" to="/login">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
