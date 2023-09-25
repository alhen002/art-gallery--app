import Navbar from "../Navbar/Navbar";

export default function Layout({ children, className }) {
  return (
    <main>
      {children}
      <Navbar />
    </main>
  );
}
