import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { IconLanguage } from "@tabler/icons-react";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";
import { Separator } from "@/components/ui/separator";
import MobileMenu from "./mobile-menu";

import {
  IconBuilding,
  IconHome,
  IconUsersGroup,
  IconSchool,
  IconBriefcase,
} from "@tabler/icons-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export const data = [
  { id: 1, name: "Anasayfa", href: "/", icon: IconHome },
  {
    id: 2,
    name: "Kurumsal",
    href: "/corporate",
    icon: IconBuilding,
    subItems: [
      { id: 21, name: "Hakkımızda", href: "/corporate/about" },
      { id: 22, name: "Misyonumuz", href: "/corporate/mission" },
      { id: 23, name: "Kurumsal Kültürümüz", href: "/corporate/culture" },
      { id: 24, name: "Ofisler & Konumlar", href: "/corporate/offices" },
      { id: 25, name: "İşe Alım Süreci & SSS", href: "/corporate/recruitment" },
    ],
  },
  {
    id: 3,
    name: "Departmanlar",
    href: "/departments",
    icon: IconUsersGroup,
    subItems: [
      { id: 31, name: "Satış & Pazarlama", href: "/departments/sales" },
      {
        id: 32,
        name: "Mühendislik & Geliştirme",
        href: "/departments/engineering",
      },
      { id: 33, name: "İnsan Kaynakları", href: "/departments/hr" },
      { id: 34, name: "Finans & Muhasebe", href: "/departments/finance" },
      { id: 35, name: "Müşteri Destek", href: "/departments/support" },
    ],
  },
  { id: 4, name: "Staj Programlarımız", href: "/internship", icon: IconSchool },
  { id: 5, name: "Açık Pozisyonlar", href: "/open-roles", icon: IconBriefcase },
];

export default function TopNavBar() {
  return (
    <div className="border-b border-border py-4 md:py-6">
      <div className="layout-container flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl">
          <span className="text-red-600">Test</span>
          <span className="text-gray-700">Company</span>
        </div>

        {/* Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {data.map((item) => (
              <NavigationMenuItem key={item.id}>
                {item.subItems ? (
                  <>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid w-50">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <NavigationMenuLink
                              render={<Link href={subItem.href} />}
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "w-full! justify-start",
                              )}
                            >
                              {subItem.name}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* User Actions */}
        <div className="hidden lg:flex items-center gap-1">
            <AnimatedThemeToggler variant="square" className="me-2" />
          <LanguageSwitcher />
          <Separator orientation="vertical" className="mx-2" />
          <Link href="/" className={buttonVariants({ variant: "default" })}>
            Giriş Yap
          </Link>
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            Kayıt Ol
          </Link>
        </div>

        <MobileMenu />
      </div>
    </div>
  );
}
