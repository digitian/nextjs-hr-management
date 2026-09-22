import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconMenu2, IconSelector } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { data } from "./top-navbar";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="lg:hidden">
            <span className="sr-only">Open menu</span>
            <IconMenu2 />
          </Button>
        }
      />
      <SheetContent side="left">

        {/* Header */}
        <SheetHeader>
          <SheetTitle>TestCompany</SheetTitle>
          <SheetDescription>Navigation</SheetDescription>
        </SheetHeader>

        {/* Navigation */}
        <ul className="px-2">
          {data.map((item) => (
            <li key={item.id} className="mb-2">
              {item.subItems ? (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "w-full justify-start"
                    )}
                  >
                    {item.icon && <item.icon stroke={1.5} data-icon="inline-start" />}
                    {item.name}
                    <IconSelector
                      stroke={1.5}
                      data-icon="inline-end"
                      className="ms-auto"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.id}>
                          <Link href={subItem.href}>{subItem.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                  <Link href={item.href} className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-start"
                  )}>
                    {item.icon && <item.icon stroke={1.5} data-icon="inline-start" />}
                    {item.name}
                  </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <SheetFooter>
            <ul className="flex flex-col gap-1">
                <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "w-full justify-start"
                            )}>
                                Türkçe
                            <IconSelector
                                stroke={1.5}
                                data-icon="inline-end"
                                className="ms-auto"
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>Language</DropdownMenuLabel>
                                <DropdownMenuItem>
                                    <Link href="/en">English</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/tr">Türkçe</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
                <li>
                    <Button variant="default" className="w-full">
                        Giriş Yap
                    </Button>
                </li>
                <li>
                    <Button variant="ghost" className="w-full">
                        Kayıt Ol
                    </Button>
                </li>
            </ul>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
