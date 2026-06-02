type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
};

// Standard horizontal rhythm: centered, max width, generous gutters.
export function Container({ children, className = "", as = "div" }: Props) {
  const Tag = as;
  return (
    <Tag className={`mx-auto max-w-6xl px-6 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
