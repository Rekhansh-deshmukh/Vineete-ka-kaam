"use client";

import * as React from "react";
import * as CarouselPrimitive from "@radix-ui/react-carousel";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = CarouselPrimitive.Root;

const CarouselViewport = React.forwardRef<
  React.ElementRef<typeof CarouselPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <CarouselPrimitive.Viewport
    ref={ref}
    className={cn("overflow-hidden w-full", className)}
    {...props}
  />
));
CarouselViewport.displayName = CarouselPrimitive.Viewport.displayName;

const CarouselContent = React.forwardRef<
  React.ElementRef<typeof CarouselPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitive.Content>
>(({ className, ...props }, ref) => (
  <CarouselPrimitive.Content
    ref={ref}
    className={cn(
      "flex will-change-transform data-[drag=move]:cursor-grab data-[dragging=true]:cursor-grabbing",
      className
    )}
    {...props}
  />
));
CarouselContent.displayName = CarouselPrimitive.Content.displayName;

const CarouselItem = React.forwardRef<
  React.ElementRef<typeof CarouselPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CarouselPrimitive.Item
    ref={ref}
    className={cn("w-full flex-[0_0_auto]", className)}
    {...props}
  />
));
CarouselItem.displayName = CarouselPrimitive.Item.displayName;

const CarouselPrevious = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, ...props }, ref) => (
  <Button
    variant="ghost"
    size="sm"
    className={cn(
      "absolute left-1 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity",
      className
    )}
    {...props}
    ref={ref}
  >
    <ChevronLeft className="h-4 w-4" />
    <span className="sr-only">Go to previous slide</span>
  </Button>
));
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, ...props }, ref) => (
  <Button
    variant="ghost"
    size="sm"
    className={cn(
      "absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity",
      className
    )}
    {...props}
    ref={ref}
  >
    <ChevronRight className="h-4 w-4" />
    <span className="sr-only">Go to next slide</span>
  </Button>
));
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselViewport,
};
