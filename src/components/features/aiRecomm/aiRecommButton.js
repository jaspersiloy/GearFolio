'use client';

// components/features/aiRecomm/AiRecommButton.js
import Image from 'next/image';

export default function AiRecommButton() {
  // Function name must match the import
  // Function is defined within the component
  const handleClick = () => {
    console.log('Button clicked');
    // Add any functionality you need here
    // Example: open a modal, toggle a menu, etc.
  };

  return (
    <button
      onClick={handleClick}
      className="hover:scale-115 hover:rounded-3xl transition duration-300 hover:cursor-pointer z-50"
    >
      <Image
        src="/aiRecommButton.svg"
        alt="Button icon"
        width={50}
        height={50}
        objectFit="contain"
      />
    </button>
  );
}
