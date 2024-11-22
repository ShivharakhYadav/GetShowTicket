import "../../styles/globals.css";

import Footer from "@/components/global/Footer";
import Nav from "@/components/global/Nav";

const CommonLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
