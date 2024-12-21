"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([
    "https://dummyimage.com/300x200/000/fff&text=Image+1",
    "https://dummyimage.com/300x200/888/fff&text=Image+2",
    "https://dummyimage.com/300x200/888/fff&text=Image+3",
    "https://dummyimage.com/300x200/555/fff&text=Image+4",
    "https://dummyimage.com/300x200/aaa/fff&text=Image+5",
    "https://dummyimage.com/300x200/333/fff&text=Image+6",
    "https://dummyimage.com/300x200/666/fff&text=Image+7",
    "https://dummyimage.com/300x200/444/fff&text=Image+8",
    "https://dummyimage.com/300x200/777/fff&text=Image+9",
    "https://dummyimage.com/300x200/555/fff&text=Image+10",
    "https://dummyimage.com/300x200/aaa/fff&text=Image+11",
    "https://dummyimage.com/300x200/888/fff&text=Image+12",
    "https://dummyimage.com/300x200/333/fff&text=Image+13",
    "https://dummyimage.com/300x200/666/fff&text=Image+14",
    "https://dummyimage.com/300x200/444/fff&text=Image+15",
    "https://dummyimage.com/300x200/777/fff&text=Image+16",
    "https://dummyimage.com/300x200/888/fff&text=Image+17",
    "https://dummyimage.com/300x200/333/fff&text=Image+18",
    "https://dummyimage.com/300x200/666/fff&text=Image+19",
    "https://dummyimage.com/300x200/555/fff&text=Image+20"
])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Input Text:", inputText)

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      console.log(data);
      setInputText("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // TODO: Update the UI here to show the images generated
    
    <div className="min-h-screen flex flex-col justify-between p-8 mb-16 mt-5">
      <h1 className="w-full fixed top-0 left-0 bg-black text-white text-center font-extrabold text-3xl mb-2 py-2 z-10">
        Instant Imaginator
      </h1>
      <main className="flex-1">
        {/* Grid layout for images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              {index === 0 ? (
                // For the first block, show an empty block with a "+" sign in the center
                <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-lg">
                  <span className="text-3xl font-bold text-white">+</span>
                </div>
              ) : (
                // Render the images for all other blocks
                <Image
                  src={image}
                  width={300}
                  height={200}
                  alt={`Generated image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full fixed bottom-0 left-0 bg-black text-white py-2">
        <div className="w-full max-w-3xl mx-auto flex justify-center">
          <form onSubmit={handleSubmit} className="w-full px-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                className="flex-1 p-3 rounded-lg bg-black/[.05] dark:bg-white/[.06] border border-black/[.08] dark:border-white/[.145] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="Describe the image you want to generate..."
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-lg bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors disabled:opacity-50"
              >
                {isLoading ? "Generating..." : "Generate"}
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}