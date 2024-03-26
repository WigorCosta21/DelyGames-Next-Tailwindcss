import Image from "next/image";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

import logoImage from "@/../public/logo.svg";

export const Header = () => {
  return (
    <header className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href="/">
            <Image
              src={logoImage}
              alt="Logo do site dalygame"
              quality={100}
              priority={true}
              className="w-full"
            />
          </Link>

          <Link href="/">Games</Link>
          <Link href="/profile">Perfil</Link>
        </nav>
        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#475569" />
          </Link>
        </div>
      </div>
    </header>
  );
};
