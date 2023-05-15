import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ styles }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate("/login-estudante")}
      className={`py-4 px-6 font-medium text-[18px] text-slate-900 bg-yellow-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
}
