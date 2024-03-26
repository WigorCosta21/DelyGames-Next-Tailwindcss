"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { FiSearch } from "react-icons/fi";

export const Input = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();

    if (input.trim() === "") return;

    router.push(`/game/search/${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
    >
      <input
        className="bg-slate-200 outline-none w-11/12"
        type="text"
        placeholder="Procurando algum jogo?..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
};
