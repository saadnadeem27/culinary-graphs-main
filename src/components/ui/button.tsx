import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-elegant hover:shadow-luxury hover-luxury",
        destructive: "bg-destructive text-destructive-foreground shadow-elegant hover:shadow-luxury hover-luxury",
        outline: "border border-border bg-background shadow-elegant hover:bg-accent hover:text-accent-foreground hover-elegant",
        secondary: "bg-secondary text-secondary-foreground shadow-elegant hover:shadow-luxury hover-elegant",
        ghost: "hover:bg-accent hover:text-accent-foreground hover-elegant",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        
        // Premium Variants
        luxury: "glass-luxury shadow-luxury hover:shadow-premium hover-luxury gradient-button-primary text-white font-bold tracking-wide",
        elegant: "glass-premium shadow-elegant hover:shadow-luxury hover-elegant bg-gradient-to-br from-card via-card-secondary to-card text-card-foreground border border-border/20",
        hero: "gradient-button-primary shadow-premium hover:shadow-luxury hover-luxury text-primary-foreground font-bold text-lg px-8 py-4 rounded-2xl animate-shimmer",
        premium: "glass-subtle shadow-elegant hover:shadow-luxury hover-elegant bg-gradient-to-br from-secondary to-secondary-light text-secondary-foreground border border-border/10",
        gradient: "bg-gradient-to-r from-accent-amethyst via-accent-sapphire to-accent-emerald text-white shadow-luxury hover:shadow-premium hover-luxury font-bold",
        glass: "glass-frosted shadow-elegant hover:shadow-luxury hover-elegant text-foreground border border-border/5",
        success: "gradient-success text-white hover:shadow-elegant hover:scale-105 shadow-card font-semibold hover:from-emerald-600 hover:to-green-600"
      },
      size: {
        default: "h-11 px-6 py-3 rounded-xl",
        sm: "h-9 px-4 py-2 rounded-lg text-xs",
        lg: "h-14 px-10 py-4 rounded-2xl text-base",
        xl: "h-16 px-12 py-5 rounded-3xl text-lg",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };