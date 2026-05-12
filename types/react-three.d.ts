import type { ReactNode } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      group: {
        rotation?: [number, number, number];
        children?: ReactNode;
      };
    }
  }
}
