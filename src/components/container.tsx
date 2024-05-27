export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-[1400px] min-h-screen mx-auto bg-white flex flex-col border-l border-r">
      {children}
    </div>
  );
}
