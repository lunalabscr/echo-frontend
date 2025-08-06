import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { type ReactNode } from "react";
import "@styles/globals.scss";
import { ScrollToTop } from "@/components/scrollToTop";
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
