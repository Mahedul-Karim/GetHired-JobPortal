import React, { ElementType, forwardRef } from "react";

type DynamicComponent<T extends ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Container = forwardRef(
  <T extends ElementType = "section">(
    { as, children, className, ...props }: DynamicComponent<T>,
    ref: React.Ref<Element> | null
  ) => {
    const Component = (as || "section") as ElementType;

    return (
      <Component
        className={`max-w-[1280px] w-11/12 mx-auto ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

export default Container;
