import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import StateContext from "../contexts/state";

export const ProlificCode = () => {
  const code = process.env.NEXT_PUBLIC_PROLIFIC_CODE ?? "";
  const { addNotification } = useContext(StateContext);
  return (
    <p className="p-4 ring-2 ring-black">
      Prolific completion code: {code}{" "}
      <button
        className="text-neutral-700 transition-colors hover:text-neutral-900 focus:outline-none focus:ring focus:ring-black"
        onClick={() => {
          navigator.clipboard.writeText(code);
          addNotification("Completion code copied to clipboard", "info");
        }}
      >
        <span className="sr-only">Copy completion code to clipboard</span>
        <ClipboardCopyIcon className="mb-1 inline h-6 w-6 cursor-pointer" />
      </button>
    </p>
  );
};
