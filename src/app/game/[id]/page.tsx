import { Container } from "@/components/Container";
import { Label } from "./components/Label";
import { IGameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { GameCard } from "@/components/GameCard";
import { Metadata } from "next";

interface IPropsParams {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: IPropsParams): Promise<Metadata> => {
  try {
    const response: IGameProps = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`,
      { next: { revalidate: 60 } }
    )
      .then((res) => res.json())
      .catch(() => {
        return {
          title: "DalyGames - Descubra jogos incrívis para se divertido",
        };
      });

    return {
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "DalyGames - Descubra jogos incrívis para se divertido",
    };
  }
};

export const getData = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } }
    );

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};

export const getGameSorted = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 60 } }
    );

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};

const Game = async ({ params: { id } }: { params: { id: string } }) => {
  const data: IGameProps = await getData(id);
  const sortedGame: IGameProps = await getGameSorted();

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-75"
          src={data.image_url}
          alt={data.title}
          priority={true}
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataforma</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de lançamento: </strong> {data.release}
        </p>

        <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado:</h2>
        <div className="flex">
          <div className="flex-grow">
            <GameCard data={sortedGame} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Game;
