
import { cva } from "class-variance-authority";



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
        "w-fit"
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

export default function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} >
  </button>
  ;
}

