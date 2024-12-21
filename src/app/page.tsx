"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { generateImage } from "./actions/generateImage";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<{ url: string; loading: boolean }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        const data = await response.json();

        if (data.success) {
          setImages(data.images.map((img: string) => ({ url: img, loading: false })));
        } else {
          console.error("Failed to fetch images:", data.error);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Add a loading state placeholder for the new image
    setImages((prev) => [
      ...prev,
      { url: "", loading: true }, // Add a loading skeleton placeholder
    ]);

    try {
      const data = await generateImage(inputText);

      if (!data.success) {
        throw new Error(data.error || "Failed to generate image");
      }

      // Replace the loading skeleton with the real image once it's fetched
      setImages((prev) => {
        const updatedImages = [...prev];
        updatedImages[updatedImages.length - 1] = { url: data.imageUrl, loading: false };
        return updatedImages;
      });
      setInputText("");

      // Scroll to the bottom of the page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between p-8 mb-16 mt-5">
      <h1 className="w-full fixed top-0 left-0 bg-black text-white text-center font-extrabold text-3xl mb-2 py-2 z-10">
        Instant Imaginator
      </h1>
      <main className="flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              {image.loading ? (
                // Skeleton loader with shimmer effect
                <div className="w-full h-full bg-gray-300 rounded-lg animate-skeleton"></div>
              ) : (
                <Image
                  src={image.url}
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
                onChange={(e) => setInputText(e.target.value)}
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
