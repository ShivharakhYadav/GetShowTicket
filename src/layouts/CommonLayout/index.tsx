import "../../styles/globals.css";

import Footer from "@/components/global/Footer";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Nav from "@/components/global/Nav";

const CommonLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Nav />
      <ReactQueryProvider>
        <div>{children}</div>
      </ReactQueryProvider>

      <Footer />
    </>
  );
};

export default CommonLayout;
