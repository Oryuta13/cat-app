"use client";

export default function Home() {
  const fetchCatImage = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    const result = await res.json()
    // console.log(result[0])
    return result[0]
  }

  const handleClick = async () => {
    const catImage = await fetchCatImage()
    // console.log(catImage.alt)
    const catImageUrl = catImage.url
    console.log(catImageUrl)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">猫画像アプリ</h1>

      <img
          src="https://cdn2.thecatapi.com/images/9m.gif"
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
