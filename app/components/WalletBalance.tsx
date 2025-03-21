import React from "react";

interface WalletBalanceProps {
  balance: number;
  onChangeUpiId: () => void;
  onManageAccount: () => void;
}

export const WalletBalance: React.FC<WalletBalanceProps> = ({
  balance,
  onChangeUpiId,
  onManageAccount,
}) => {
  return (
    <section className="flex flex-col gap-8 justify-center items-center p-4 w-full bg-white rounded-2xl">
      <div className="flex flex-col gap-8 items-center w-full">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-sm leading-5 text-gray-400">Your Earnings</p>
          <p className="text-3xl font-bold leading-10 text-zinc-900">
            ₹{balance.toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between items-start w-full">
          <button
            onClick={onChangeUpiId}
            className="flex gap-2 items-center px-4 py-3 h-8 rounded-lg shadow-sm transition-all cursor-pointer bg-slate-100 duration-[0.2s] ease-[ease-in-out]"
          >
            <span className="text-xs font-bold tracking-wide leading-5 text-neutral-950">
              Change UPI ID
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg id="1:321" layer-name="Frame" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M9.5 12H10.5V11H11.5C11.7833 11 12.0208 10.9042 12.2125 10.7125C12.4042 10.5208 12.5 10.2833 12.5 10V9C12.5 8.71667 12.4042 8.47917 12.2125 8.2875C12.0208 8.09583 11.7833 8 11.5 8H9.5V12ZM14 12H15V8H14V12ZM10.5 10V9H11.5V10H10.5ZM6 12H7C7.28333 12 7.52083 11.9042 7.7125 11.7125C7.90417 11.5208 8 11.2833 8 11V8H7V11H6V8H5V11C5 11.2833 5.09583 11.5208 5.2875 11.7125C5.47917 11.9042 5.71667 12 6 12ZM3.5 16C3.0875 16 2.73438 15.8531 2.44063 15.5592C2.14688 15.2653 2 14.9119 2 14.4992V5.49417C2 5.08139 2.14688 4.72917 2.44063 4.4375C2.73438 4.14583 3.0875 4 3.5 4H16.5C16.9125 4 17.2656 4.14694 17.5594 4.44083C17.8531 4.73472 18 5.08806 18 5.50083V14.5058C18 14.9186 17.8531 15.2708 17.5594 15.5625C17.2656 15.8542 16.9125 16 16.5 16H3.5ZM3.5 14.5H16.5V5.5H3.5V14.5Z" fill="black"></path> </svg>`,
              }}
            />
          </button>
          <button
            onClick={onManageAccount}
            className="flex gap-2 items-center px-4 py-3 h-8 rounded-lg shadow-sm transition-all cursor-pointer bg-slate-100 duration-[0.2s] ease-[ease-in-out]"
          >
            <span className="text-xs font-bold tracking-wide leading-5 text-neutral-950">
              Manage Account
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg id="1:326" layer-name="Frame" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M4 14.5V8H5.5V14.5H4ZM9.25 14.5V8H10.75V14.5H9.25ZM2 17V15.5H18V17H2ZM14.5 14.5V8H16V14.5H14.5ZM2 7V5L10 1L18 5V7H2ZM4.35417 5.5H15.6458L10 2.6875L4.35417 5.5Z" fill="black"></path> </svg>`,
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
