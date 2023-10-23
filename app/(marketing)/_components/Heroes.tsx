import Image from "next/image";

export const Heroes = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents.png"
            fill
            className=" object-contain dark:hidden"
            alt="Document"
          />
          <Image
            src="/documents-dark.png"
            fill
            className=" object-contain dark:block hidden"
            alt="Document"
          />
        </div>
        <div className="relative w-[350px] h-[350px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            className=" object-contain dark:hidden"
            alt="Reading"
          />
          <Image
            src="/reading-dark.png"
            fill
            className=" object-contain dark:block hidden"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};
