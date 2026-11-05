import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { getContact } from "@/lib/public-content";

/** Multipage routes: the nav links to pages, not to same-page anchors. */
export default async function MainLayout({ children }: { children: React.ReactNode }) {
  // Header is a Client Component, so the shop's number is read here, on the
  // server, rather than pulling all of lib/content into the browser bundle.
  const { phone } = await getContact();

  return (
    <SmoothScroll>
      <Preloader />
      <ScrollIndicator />
      <Header phone={phone} />
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
