"use client";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

export default function Jumbotron() {
  const router = useRouter();
  const navigateToGame = () => router.push("game");
  return (
    <section className="bg-gradient-to-b from-green-900 to-blue-900 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Você tem ética?
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Responda um questionário curto para descobrir qual o seu perfil ético{" "}
          <br />
          quando se trata da ciência.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button
            onClick={navigateToGame}
            gradientDuoTone="greenToBlue"
            outline
          >
            <p>Começar</p>
          </Button>
        </div>
      </div>
    </section>
  );
}
