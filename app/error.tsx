"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-2 bg-slate-100">
      <Image
        src="/error.png"
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        height="300"
        width="300"
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-[6rem] font-bold">Oops! 😱</h2>
      <h3 className="text-[2rem] font-semibold">404 - PAGE NOT FOUND 🙈</h3>
      <p className="text-[1.4rem] font-medium">Road is blocked 🚧</p>
      <Button asChild>
        <Link href="/documents">Back to documents now!🚀</Link>
      </Button>
    </div>
  );
};

export default Error;
