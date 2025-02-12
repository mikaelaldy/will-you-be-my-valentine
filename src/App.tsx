// src/App.tsx
"use client";
import { useState } from "react";

        export default function Page() { // Keep the component name as Page if you prefer
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure, Beb?",
      "What if I asked really nicely?",
      "Pretty please",
      "what about momoyo's macha Ice cream?",
      "with nasi padang?",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to mika's ghost",
      "please babe",
      ":((((",
      "WATASHIWA SHINDEIRU",
      "ESTOY MUERTO",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGoweW11NzA4MjhqcjVsMGZzYnhjeHdweTM0cDIzZWxhZTFkYnJnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T0ph30SEe8W15fLHIU/giphy.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW81anV1aDM3MnRmcTZybjI2M3VuNGdjaWJobDNoeG5yM2xjdHlmOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25688FI5AUUVf04upZ/giphy.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
        }
