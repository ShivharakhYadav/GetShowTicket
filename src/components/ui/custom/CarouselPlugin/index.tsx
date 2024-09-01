"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
} from "./partials/extension/carousel";
import { CarouselPluginProps } from "./types";

export const CarouselPlugin: React.FC<CarouselPluginProps> = ({
  children,
  autoplayDelay,
  showIndicators = false,
}) => {
  const autoplay = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
    >
      <CarouselNext />
      <CarouselPrevious />
      <CarouselMainContainer className="h-60">{children}</CarouselMainContainer>
      {showIndicators && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1">
            {React.Children.map(children, (_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      )}
    </Carousel>
  );
};
