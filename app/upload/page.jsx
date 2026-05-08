import { redirect } from "next/navigation";
import UploadClient from "./upload";
import { auth } from "@/auth";

export default async function Upload() {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  return (
    <main>
      <UploadClient />
    </main>
  );
}
