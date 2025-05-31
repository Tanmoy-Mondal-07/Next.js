"use client"

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };


  const onLogin = async () => {
    try {
      const res = await axios.post("/api/users/login", user);
      if (res.status === 200) {
        router.push("/login");
      }
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="flex w-full h-screen flex-col justify-center items-center space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Login</h1>
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        className="border rounded px-4 py-2 w-64"
      />
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        className="border rounded px-4 py-2 w-64"
      />
      <button
        onClick={onLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
      <Link href="/signup" className="text-blue-500 hover:underline">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
}