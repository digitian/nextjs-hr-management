import TopNavBar from "./_components/top-navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <TopNavBar />
        {children}
    </div>
  );
}