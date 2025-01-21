import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium items-center", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white",
    },
  },
});

export default function Button(props: { variant: "primary" | "secondary" } & HTMLAttributes<HTMLButtonElement>) {
  const { variant, className, children, ...rest } = props;

  return (
    <button
      className={classes({
        variant,
        className
      })}
      {...rest}
    >
      {children}
    </button>
  );
}