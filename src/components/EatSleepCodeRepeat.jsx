import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const EatSleepCodeRepeat = () => {
  const [text] = useTypewriter({
    words: ["Eat", "Sleep", "Code", "Repeat"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 60,
    delaySpeed: 1000,
  });

  return (
    <div className="">
      <span className="text-xl font-mono text-white">{text}</span>
      <Cursor cursorColor="white" />
    </div>
  );
};

export default EatSleepCodeRepeat;
