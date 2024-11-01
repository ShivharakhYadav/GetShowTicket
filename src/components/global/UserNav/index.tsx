"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import appRoutes from "@/config/appRoutes";
import { Skeleton } from "@/components/ui/skeleton";
import { signOut } from "@/auth";

export const UserNav = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading")
    return <Skeleton className="h-12 w-12 rounded-full" />;

  if (!session?.user) {
    return (
      <Button
        className="h-10 rounded-full px-4"
        onClick={() => router.push(appRoutes.login)}
      >
        Sign In
      </Button>
    );
  }

  const { user } = session;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.image ?? undefined} alt="User Image" />
            <AvatarFallback>
              {user?.username?.[0]?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 origin-top-right transition-opacity duration-150 ease-in-out"
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Notifications</DropdownMenuItem>
          <DropdownMenuItem>Help</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button className="w-full text-left" onClick={() => signOut()}>
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
