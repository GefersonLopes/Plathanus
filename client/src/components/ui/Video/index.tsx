import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { IoMdPlay } from "react-icons/io";

export interface VideoThumbnailProps {
  src: string;
  alt?: string;
  className?: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  src,
  alt = "thumbnail",
  className = "",
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <div
      className={`relative w-full overflow-hidden aspect-video ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`absolute inset-0 bg-[#121212] transition-opacity duration-300 ${
          isLoading ? "opacity-100" : "opacity-30"
        }`}
      />

      <button
        type="button"
        onClick={handleClick}
        disabled={isLoading}
        aria-label="Play video"
        className="absolute inset-0 flex items-center justify-center text-white focus:outline-none"
      >
        {isLoading ? (
          <FiLoader className="text-5xl animate-spin" />
        ) : (
          <div className="h-25 w-25 bg-white rounded-full flex items-center justify-center">
            <IoMdPlay className="text-primary ml-2" size={60} />
          </div>
        )}
      </button>
    </div>
  );
};

export default VideoThumbnail;
