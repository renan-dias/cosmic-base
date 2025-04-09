"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatedNumber, AnimatedBar } from "./AnimatedPoints";
import { Button, Card, Tooltip } from "flowbite-react";

type Profile = {
  id: string;
  name: string;
  interval: number;
  description: string;
  minPoints: number;
  maxPoints: number;
};

const profiles: Profile[] = [
  {
    id: "nli",
    name: "Neoliberal",
    minPoints: 0,
    maxPoints: 10,
    interval: 10,
    description: `Você é um lixo humano que não se preocupa com nada além do próprio lucro
     e em manter os próprios privilégios. 
     Você não se importa que pessoas passem fome e morra enquanto
     pouquíssimas tem uma ótima condição de vida graças a exploração da qual se beneficiam
     (desde que você esteja no grupo vencedor).`,
  },
  {
    id: "esq",
    name: "Reformista de Esquerda",
    interval: 10,
    minPoints: 10,
    maxPoints: 20,
    description: `Você sabe que o capitalismo não dá certo,
      mas acredita que é possível pelo próprio sistema capitalista, 
      superar este modo de produção.
      Como se a elite fosse abrir mão dos privilégios que possui pela simples boa vontade.`,
  },
  {
    id: "com",
    name: "Comunista",
    interval: 15,
    minPoints: 20,
    maxPoints: 35,
    description: `Você entende que é preciso uma revolução da classe trabalhadora
    para construir um novo sistema voltado para as necessidades humanas e não para 
    o lucro de poucos em detrimento da grande maioria`,
  },
];

const getProfile = (points: number, profiles: Profile[]): Profile => {
  let userProfile = profiles[profiles.length - 1];
  profiles.forEach((profile) => {
    if (points >= profile.minPoints && points < profile.maxPoints) {
      userProfile = profile;
    }
  });
  return userProfile;
};

export default function Results() {
  const [points, setPoints] = useState(0);
  const [profile, setProfile] = useState({} as Profile);
  const [profileDetail, setProfileDetail] = useState({} as Profile);
  const searchParams = useSearchParams();
  const router = useRouter();

  const maxPoints = 35;
  const totalPoints = +(searchParams.get("points") || 0);
  useEffect(() => {
    setPoints(totalPoints);
    setProfile(getProfile(totalPoints, profiles));
    setProfileDetail(getProfile(totalPoints, profiles));
  }, [totalPoints]);
  const navigateToGame = () => router.push("game");

  return (
    <div className="p-8 max-w-5xl">
      <h1 className="text-2xl font-extrabold text-center">
        Com sua pontuação...
      </h1>
      <AnimatedNumber n={points}></AnimatedNumber>
      <div className="rounded-lg flex justify-start w-full h-10 bg-slate-600 relative">
        <div className="absolute -top-2 w-full flex">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              style={{
                width: `calc(${Math.floor(
                  (100 * profile.interval) / maxPoints
                )}%)`,
              }}
              className={`flex items-center justify-center`}
            >
              <div
                onClick={() => setProfileDetail(profile)}
                className="w-full text-center hover:scale-125 cursor-pointer transition-all"
              >
                {profile.name}
              </div>
              {idx !== profiles.length - 1 && (
                <div className="rounded h-14 w-2 bg-gray-300 shrink"></div>
              )}
            </div>
          ))}
        </div>
        <AnimatedBar points={points} maxPoints={maxPoints}></AnimatedBar>
      </div>
      <h1 className="mt-6 text-xl font-extrabold text-center">
        Seu perfil ético é... {profile.name}
      </h1>
      <div className="flex p-8 justify-center">
        {profileDetail && profileDetail.name ? (
          <Card className="max-w-md">
            <h5 className="text-2xl text-center font-bold tracking-tight text-black-900 dark:text-white">
              {profileDetail.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {profileDetail.description}
            </p>
            <Button
              onClick={navigateToGame}
              gradientDuoTone="greenToBlue"
              outline
            >
              <p>Jogar Novamente</p>
            </Button>
          </Card>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
