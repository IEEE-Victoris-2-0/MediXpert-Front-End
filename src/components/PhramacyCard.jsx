import React from "react";

const PhramacyCard = () => {
  return (
    <div className="bg-white flex justify-center w-full h-full aspect-square items-center p-4 rounded-lg relative overflow-hidden">
      <div className="bg-[#C2AEF39C] w-full h-full rounded-lg p-4 flex flex-col gap-2 items-center justify-center">
        <div className="overflow-hidden flex justify-center w-full h-full items-center">
          <img
            src="/assets/phramacies/1.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <span>Phara Nece</span>
        <div className="flex gap-2 bg-primary rounded-lg px-4 py-1 text-white">
          <img src="/assets/star.svg" alt="" />
          <span>4.3</span>
        </div>
      </div>
    </div>
  );
};

export default PhramacyCard;
