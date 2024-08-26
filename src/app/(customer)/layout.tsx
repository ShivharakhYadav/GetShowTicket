import Footer from "@/components/global/Footer";
import Nav from "@/components/global/Nav";

const CustomLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default CustomLayout;
