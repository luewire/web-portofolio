export const ScrollingText = () => {
  const text = "$ADZILLA ";
  const repeatedText = text.repeat(50);

  return (
    <div className="w-full overflow-hidden bg-foreground text-background py-4 border-y-4 border-foreground">
      <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite]">
        <span className="text-2xl font-black">{repeatedText}</span>
        <span className="text-2xl font-black">{repeatedText}</span>
      </div>
    </div>
  );
};
