import React from "react";

type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export const Text = <C extends React.ElementType>({
  as,
  children,
  ...restProps
}: TextProps<C>) => {
  const Componet = as || "span";

  return <Componet {...restProps}>{children}</Componet>;
};
