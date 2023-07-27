import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NavBar />
      <div className="flex min-h-screen flex-col justify-between">
        <main className="relative pt-16">{children}</main>
        <Footer />
      </div>
    </main>
  );
}
