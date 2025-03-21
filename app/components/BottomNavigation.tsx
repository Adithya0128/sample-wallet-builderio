import React from "react";

export const BottomNavigation: React.FC = () => {
  return (
    <nav className="flex gap-2 items-start px-4 py-3 bg-white rounded-2xl w-[390px]">
      <div className="flex flex-1 justify-between items-center">
        <button className="flex justify-center items-center p-3 w-12 h-12">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg id="I1:400;834:4400" layer-name="home-line" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M8 17H16M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
            }}
          />
        </button>
        <button className="flex gap-2 items-center p-3">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg id="I1:400;834:4753" layer-name="calendar" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M21.3333 7.5V6C21.3333 5.46957 21.1226 4.96086 20.7475 4.58579C20.3725 4.21071 19.8638 4 19.3333 4H5.33333C4.8029 4 4.29419 4.21071 3.91911 4.58579C3.54404 4.96086 3.33333 5.46957 3.33333 6V20C3.33333 20.5304 3.54404 21.0391 3.91911 21.4142C4.29419 21.7893 4.8029 22 5.33333 22H8.83333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.3333 2V6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.33333 2V6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.33333 10H8.33333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
</path> <path d="M17.8333 17.5L16.3333 16.25V14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22.3333 16C22.3333 17.5913 21.7012 19.1174 20.576 20.2426C19.4508 21.3679 17.9246 22 16.3333 22C14.742 22 13.2159 21.3679 12.0907 20.2426C10.9655 19.1174 10.3333 17.5913 10.3333 16C10.3333 14.4087 10.9655 12.8826 12.0907 11.7574C13.2159 10.6321 14.742 10 16.3333 10C17.9246 10 19.4508 10.6321 20.576 11.7574C21.7012 12.8826 22.3333 14.4087 22.3333 16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
            }}
          />
        </button>
        <div className="flex flex-col gap-2 items-start p-3 bg-blue-50 rounded-[40px]">
          <div className="flex gap-1 items-center px-1 py-0">
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg id="I1:400;834:4919" layer-name="wallet-03" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.66666 4C5.11437 4 4.66666 4.44772 4.66666 5C4.66666 5.55228 5.11437 6 5.66666 6L19.6667 6C21.3235 6 22.6667 7.34315 22.6667 9V19C22.6667 20.6569 21.3235 22 19.6667 22H5.66666C4.0098 22 2.66666 20.6569 2.66666 19V5C2.66666 3.34315 4.0098 2 5.66666 2H17.6667C18.2189 2 18.6667 2.44772 18.6667 3C18.6667 3.55228 18.2189 4 17.6667 4H5.66666ZM17.1667 12.5C16.3382 12.5 15.6667 13.1716 15.6667 14C15.6667 14.8284 16.3382 15.5 17.1667 15.5C17.9951 15.5 18.6667 14.8284 18.6667 14C18.6667 13.1716 17.9951 12.5 17.1667 12.5Z" fill="#1561FF"></path> </svg>`,
              }}
            />
            <span className="text-sm leading-5 text-blue-600">Wallet</span>
          </div>
        </div>
        <button className="flex gap-2 items-center p-3">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg id="I1:400;834:4661" layer-name="user" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px] p-[3px_6px]"> <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
            }}
          />
        </button>
      </div>
    </nav>
  );
};
