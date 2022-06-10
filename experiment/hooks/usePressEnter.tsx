import { NextRouter } from "next/router";
import { useEffect } from "react";

export const usePressEnter = (nextURL: string, router: NextRouter, callback = () => {}) =>
  useEffect(() => {
    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        callback();
        router.push(nextURL);
      }
    };
    window.addEventListener("keydown", handleEnter);

    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, []);
