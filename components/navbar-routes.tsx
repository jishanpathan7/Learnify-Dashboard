"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { isCreator } from "@/lib/creator";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isCreatorPage = pathname?.startsWith("/creator");
  const isPlayerPage = pathname?.includes("/courses" || "/chapter");
  const isSearchPage = pathname?.includes("/search");

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
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
        ) : isCreator(userId) ? (
          <Link href="/creator/courses">
            <Button
              size="sm"
              variant="ghost"
              className="border-solid border-2 border-sky-600"
            >
              Creator Mode
            </Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
