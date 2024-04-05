
import { cva } from "class-variance-authority";
import {Cross, Like} from "../libs/Icons";





// Base definition
const base = "";

const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-button",
        "text-button-txt",
        "border-transparent",
        "rounded-md",
        "font-body",
        "font-bold",
        "hover:bg-button-hover",
        "flex",
        "items-center",
        "gap-2",
        "w-fit"
      ],
      secondary: [
        "bg-button-secondary",
        "text-button-txt",
        "border-transparent",
        "rounded-md",
        "font-body",
        "font-bold",
        "hover:bg-button-secondary-hover",
        "flex",
        "items-center",
        "gap-2",
        "w-fit"
      ],
      square: [
        "bg-button-square",
        "border-transparent",
        "rounded-md",
        "w-fit",
        "border",
        "border-slate-600",
        "w-3",
        "h-10"

      ],
    },
    size: {
      small: ["text-sm", "py-2", "px-4"],
      medium: ["text-base", "py-2", "px-4"],
      film: ["text-sm", "py-2", "px-8"]
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium"}],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function ButtonSquare({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} >
    <Cross className="text-white group-hover:text-button-square-hover w-5"/>
  </button>
  ;
}

