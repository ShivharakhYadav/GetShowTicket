import { ReactNode } from "react";

export interface CarouselPluginProps {
  children: ReactNode;
  autoplayDelay: number;
  showIndicators?: boolean;
}
