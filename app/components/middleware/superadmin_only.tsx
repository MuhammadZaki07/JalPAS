
import { useSession } from "next-auth/react";

export default function SuperadminOnly({ children }: { children: React.ReactNode }) {
  const { data, status } = useSession();

  if (status === "authenticated" && (data?.user as any)?.role === "superadmin") {
    return <>{children}</>;
  } else {
    return null;
  }
}