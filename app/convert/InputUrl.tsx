"use client";

import Link from "next/link";
import { useState } from "react";

export default function InputUrl() {
  const [url, setUrl] = useState("");

  const getIdFromUrl = (url: string): string => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length == 11 ? match[2] : "";
  };

  const handleConvert = (): string => {
    const id = getIdFromUrl(url);
    return `/convert` + (id !== "" ? `/${id}` : "");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        className="border rounded-lg w-5/12 max-w-6/12 py-2 mb-4"
        onChange={(e) => setUrl(e.target.value)}
      ></input>
      <Link
        className="text-slate-100 font-bold py-2 px-4 rounded border"
        href={handleConvert()}
      >
        Convert
      </Link>
    </div>
  );
}
