import React from "react";

export default function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-medium text-[18px] text-slate-900 bg-yellow-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
}
