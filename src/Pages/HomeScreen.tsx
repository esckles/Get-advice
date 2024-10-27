/* eslint-disable @typescript-eslint/no-explicit-any */
import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const HomeScreen = () => {
  const [advice, setAdvice] = useState<boolean>(false);
  const [count, setcount] = useState<number>(0);

  async function getAdvice() {
    const x = await fetch("https://api.adviceslip.com/advice");
    const data = await x.json();
    setAdvice(data.slip.advice);
    setcount((el) => el + 1);
  }

  // useEffect(() => {
  //   getAdvice();
  // }, []);
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[50%] h-[50%] rounded-md border-[10px] flex justify-center items-center ">
          <div className=" border-[3px] w-[99%] h-[99%] flex justify-center items-center  bg-[#000000dc] text-white ">
            {advice}
          </div>
          <div className="text-[18px] font-semibold text-white absolute mt-[240px]">
            TV
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[20%] justify-center items-center flex mb-7">
        <Message count={count} />
      </div>
      <div className="w-[100%] h-[30%] flex justify-center items-center">
        <div
          className="w-[90px] h-[120px] border-[3px] rounded-md border-[black] pl-1 flex flex-wrap gap-1 py-2 cursor-pointer "
          onClick={getAdvice}
        >
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
          <p className="w-[20%] h-[20%] border border-[black] rounded-[360px]"></p>
        </div>
      </div>
    </div>
  );
};

const Message = (props: any) => {
  return (
    <div>
      <p>
        You have clicked this <p>{props.count}</p>times
      </p>
    </div>
  );
};

export default HomeScreen;
