"use client";

import { useState } from "react";

interface SearchCatImage {
  id: string
  url: string
  width: number
  height: number
}

export default function Home() {
  const [catImageUrl, setCatImageUrl] = useState("")
  const fetchCatImage = async (): Promise<SearchCatImage> => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    const result = await res.json()
    // console.log(result[0])
    return result[0]
  }

  const handleClick = async () => {
    const catImage = await fetchCatImage()
    setCatImageUrl(catImage.url)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">猫画像アプリ</h1>

      <img
          src={catImageUrl}
          className="w-[800px]"
      />
      <button
          className="border-2 bg-blue-200 p-10 mt-20"
          onClick={handleClick}
      >
        今日の猫さん
      </button>

    </div>
  );
}
