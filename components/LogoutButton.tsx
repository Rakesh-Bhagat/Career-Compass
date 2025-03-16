"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();
  return (
    <button
      onClick={() => {
        signOut()
        router.push("/login")
    }}
      className="px-4 mr-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Logout
    </button>
  );
}
