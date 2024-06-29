// pages/404.js or pages/404.tsx
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page Not Found</p>
      <Link href="/">
        <Button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Go back home
        </Button>
      </Link>
    </div>
  );
};

export default Custom404;
