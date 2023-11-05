"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isCreatorPage = pathname?.startsWith("/creator");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isCreatorPage || isPlayerPage ? (
        <Link href="/">
          <Button
            size="sm"
            variant="ghost"
            className="border-solid border-2 border-sky-600"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/creator/courses">
          <Button
            size="sm"
            variant="ghost"
            className="border-solid border-2 border-sky-600"
          >
            Creator Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
