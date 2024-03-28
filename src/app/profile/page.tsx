import Image from "next/image";

import { FaShareAlt } from "react-icons/fa";
import { Container } from "@/components/Container";

import useImg from "@/../public/user.png";
import { FavoriteCard } from "./components/Favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu perfil - Daly Games sua plataforma de jogos!",
  description:
    "Perfil Sujeito Programador - Daly Games sua plataforma de jogos!",
};

const Profile = () => {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg flex-col justify-center sm:flex-row sm:justify-normal">
            <Image
              src={useImg}
              alt="Imagem perfil do usuário"
              className="rounded-full w-56 h-56 object-cover"
            />
            <h1 className="font-bold text-2xl">Sujeito Programador</h1>
          </div>

          <div className="sm:absolute top-0 right-0 gap-3 flex item-center justify-center mt-2">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
              Configurações
            </button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg">
              <FaShareAlt size={24} color="#fff" />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow">
            <FavoriteCard />
          </div>
          <div className="flex-grow">
            <FavoriteCard />
          </div>
          <div className="flex-grow">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Profile;
