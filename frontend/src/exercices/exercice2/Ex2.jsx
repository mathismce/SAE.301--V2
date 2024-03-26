import { twMerge } from "tailwind-merge";
import { cn } from "../../libs/utils";

function Button({ children, className, ...restProps }) {
  let color = 'neutral'
  let active = true;
  return (
    <button
      className={cn(
        "rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500 active:bg-emerald-700 bg${color}-500",
        className,
        active? "bg-yellow-400" : "bg-yellow-800" ,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default function Ex2() {
  return (
    <div className="grid h-screen place-content-center">
      <Button className="bg-blue-500 hover:bg-blue-800">Click</Button>
    </div>
  );
}
