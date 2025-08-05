import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-hover",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-white shadow-glow hover:shadow-[var(--shadow-glow),_0_0_60px_hsl(var(--accent-primary)_/_0.4)] hover:scale-105 transform transition-all duration-300",
        secondary: "bg-interactive-base text-text-primary border border-card-border hover:bg-interactive-hover hover:border-accent-primary/50 hover:scale-105",
        outline: "border border-accent-primary/30 text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary hover:scale-105",
        ghost: "text-text-secondary hover:text-accent-primary hover:bg-interactive-base/50 hover:scale-105",
        link: "text-accent-primary underline-offset-4 hover:underline hover:text-accent-glow",
        hero: "bg-transparent border border-white/20 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:scale-105 text-lg px-8 py-3",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-10 text-lg",
        icon: "h-11 w-11",
        hero: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
