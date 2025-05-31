"use client"

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };


  const onSignup = async () => {
    try {
      const res = await axios.post("/api/users/signup", user);
      console.log(res);
      if (res.status === 200) {
        router.push("/login");
      }
    } catch (err) {
      console.log("Signup failed:", err);
    }
  };

  return (
    <div className="flex w-full h-screen flex-col justify-center items-center space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Sign Up</h1>
      <input
        type="text"
        id="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
        className="border rounded px-4 py-2 w-64"
      />
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
        onClick={onSignup}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Sign Up
      </button>
      <Link href="/login" className="text-blue-500 hover:underline">
        Already have an account? Log in
      </Link>
    </div>
  );
}