import React from "react";

interface WalletHeaderProps {
  onBackClick: () => void;
}

export const WalletHeader: React.FC<WalletHeaderProps> = ({ onBackClick }) => {
  return (
    <nav className="flex gap-2 items-center w-[358px]">
      <button
        onClick={onBackClick}
        className="transition-all cursor-pointer duration-[0.2s] ease-[ease-in-out]"
        aria-label="Go back"
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg id="1:304" layer-name="arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px] flex-shrink-0"> <path d="M5 12H19" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 12L9 16" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 12L9 8" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
          }}
        />
      </button>
      <h1 className="flex gap-4 justify-center items-center h-[23px] text-lg leading-6 text-black">
        Your Wallet
      </h1>
    </nav>
  );
};
