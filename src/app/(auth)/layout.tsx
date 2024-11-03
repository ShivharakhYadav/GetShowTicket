import { Toaster } from "@/components/ui/toaster";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Toaster />
      {children}
    </main>
  );
};

export default AuthLayout;
