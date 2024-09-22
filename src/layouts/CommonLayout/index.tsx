import Footer from "@/components/global/Footer";
import Nav from "@/components/global/Nav";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const CommonLayout = ({
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
