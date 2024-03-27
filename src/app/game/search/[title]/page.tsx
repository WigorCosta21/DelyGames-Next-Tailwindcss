import { Container } from "@/components/Container";
import { GameCard } from "@/components/GameCard";
import { Input } from "@/components/Input/inder";
import { IGameProps } from "@/utils/types/game";

const getData = async (title: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );

    return res.json();
  } catch (err) {
    return null;
  }
};

const Search = async ({ params: { title } }: { params: { title: string } }) => {
  const games: IGameProps[] = await getData(title);

  return (
    <main className="w-fll text-black">
      <Container>
        <Input />

        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que encontramos na nossa base
        </h1>

        {!games && <p>Esse jogo não foi encontrado!</p>}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games && games.map((item) => <GameCard key={item.id} data={item} />)}
        </section>
      </Container>
    </main>
  );
};

export default Search;
