import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const socialMediaLinks = [
  { name: "LinkedIn", href: "#", icon: IconBrandLinkedin },
  { name: "X", href: "#", icon: IconBrandX },
  { name: "Facebook", href: "#", icon: IconBrandFacebook },
  { name: "YouTube", href: "#", icon: IconBrandYoutube },
];

export default function Footer() {
    return (
        <footer className="bg-accent text-accent-foreground py-4 mt-auto border-t border-border">
            <div className="layout-container grid md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-3">
                    <h3 className="font-bold">TestCompany</h3>
                    <p className="text-sm">
                        123 Main Street, Anytown, USA 12345
                    </p>

                    {/* Social Media Links */}
                    <div className="flex gap-2">

                        {/* Social Media Links */}
                        {socialMediaLinks.map((link) => (
                            <Tooltip key={link.name}>
                                <TooltipTrigger render={<a href={link.href} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="icon">
                                            <link.icon />
                                        </Button>
                                    </a>} />
                                <TooltipContent>
                                    <p>{link.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-2">Navigasyon</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Anasayfa</a></li>
                        <li><a href="#" className="hover:underline">Staj Programlarımız</a></li>
                        <li><a href="#" className="hover:underline">Açık Pozisyonlar</a></li>
                        <li><a href="#" className="hover:underline">Giriş Yap</a></li>
                        <li><a href="#" className="hover:underline">Kayıt Ol</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-2">Kurumsal</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Hakkımızda</a></li>
                        <li><a href="#" className="hover:underline">Misyonumuz</a></li>
                        <li><a href="#" className="hover:underline">Kurumsal Kültürümüz</a></li>
                        <li><a href="#" className="hover:underline">Ofisler & Konumlar</a></li>
                        <li><a href="#" className="hover:underline">İşe Alım Süreci & SSS</a></li>
                        <li><a href="#" className="hover:underline">İletişim</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-2">Departmanlar</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Satış & Pazarlama</a></li>
                        <li><a href="#" className="hover:underline">Mühendislik & Geliştirme</a></li>
                        <li><a href="#" className="hover:underline">İnsan Kaynakları</a></li>
                        <li><a href="#" className="hover:underline">Finans & Muhasebe</a></li>
                        <li><a href="#" className="hover:underline">Müşteri Destek</a></li>
                    </ul>
                </div>
            </div>

            <Separator className="my-4" />
            <div className="layout-container mt-3 flex flex-col md:flex-row items-center justify-between gap-2">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} TestCompany. Tüm hakları saklıdır.
                </p>
                <div className="flex items-center gap-2 md:gap-4 text-sm">
                    <a href="#" className="hover:underline">Gizlilik Politikası</a>
                    <a href="#" className="hover:underline">Çerez Politikası</a>
                    <a href="#" className="hover:underline">Kullanım Şartları</a>
                </div>
            </div>
        </footer>
    )
}