import Footer from "./_components/footer";
import TopNavBar from "./_components/top-navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
        <TopNavBar />
        {children}
        <Footer />
    </div>
  );
}