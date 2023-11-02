"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  const router = useRouter()
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" })
    .then((documentId) => router.push(`/documents/${documentId}`))


    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created",
      error: "Failed to create a new note",
    });
  };

  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        width="300"
        height="300"
        className="dark:hidden"
        alt="Empty"
      />
      <Image
        src="/empty-dark.png"
        width="300"
        height="300"
        className="dark:block hidden"
        alt="Empty"
      />
      <h2 className=" text-lg font-medium">
        welcome to {user?.firstName}&apos;s Journal
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className=" h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;

