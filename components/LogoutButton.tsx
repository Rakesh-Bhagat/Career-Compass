"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();
  return (
    <button
      onClick={() => {
        signOut({callbackUrl: "/"})
    }}
      className="px-4 mr-2 py-2 bg-primary text-white rounded-lg hover:bg-gray-500 transition"
    >
      Logout
    </button>
  );
}
