import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NavBar />
      <div className="max-w-2xl mx-auto px-6 pt-4">
        {children}
      </div>
      <Footer />
    </main>
  );
}
