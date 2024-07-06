import Link from "next/link";

import { Button } from "@/components/ui/button";

const Custom404 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-8 text-xl">Page Not Found</p>
      <Link href="/">
        <Button className="rounded">Go back home</Button>
      </Link>
    </div>
  );
};

export default Custom404;
