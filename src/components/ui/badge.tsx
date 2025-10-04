import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.ComponentProps<"div"> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      data-slot="badge"
      data-variant={variant}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-light transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" &&
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        variant === "secondary" &&
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "destructive" &&
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        variant === "outline" && "text-foreground",
        variant === "success" &&
          "border-transparent bg-green-600 text-white shadow hover:bg-green-600/80",
        variant === "warning" &&
          "border-transparent bg-yellow-600 text-white shadow hover:bg-yellow-600/80",
        className
      )}
      {...props}
    />
  )
}

export { Badge, type BadgeProps }
