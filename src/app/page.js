
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TrainerCard from "@/components/TrainerCard";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";
import { montserrat } from "@/ui/fonts";
import Image from "next/image";

export default function Home() {

  const perks = [
    {
      number: '+54',
      title: 'Entrenadores personales y preparadores físicos',

    },
    {
      number: '+120',
      title: 'Personas han encontrado a su entrenador ideal',
    },
    {
      number: '+40',
      title: 'Entrenadores han conseguido más clientes',
    },
  ]

  return (
    <main>
      <div className="h-60 ml-24 w-80 rounded-full bg-sky-500  blur-3xl opacity-30 absolute" />

      <MaxWidthWrapper className="flex flex-col mt-12 justify-center w-fit gap-24 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* <Image src='/fyt-blue.png' height={1000} width={500} className="h-28 w-fit mx-auto my-4" /> */}
          <h1 className={`${montserrat.className} antialiased text-6xl sm:text-7xl font-black mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800 tracking-tight`}>Find Your Trainer</h1>
          <p className={`${montserrat.className} antialiased test-xs sm:text-md leading-tight text-muted-foreground font-medium tracking-tighter`}><span className="font-semibold">FYT</span>. Encuentra aquí al entrenador que mejor se adapte a tus necesidades.</p>
        </div>
        <div className='px-12 h-fit '>
          <Highlight className={`${montserrat.className}  text-white font-bold text-3xl`}>
            Somos el intermediario entre el mundo y los entrenadores.
          </Highlight>
          <div className="flex flex-col w-full justify-between md:flex-row mx-auto items-center ">
            <div className="max-w-2xl my-12 z-20 ">
              <div className={`${montserrat.className} relative antialiased text-lg leading-tight text-slate-800 font-medium tracking-tight rounded-xl w-fit my-4 flex flex-col gap-2 max-w-3xl`}>

                <p >Facilitamos el proceso de búsqueda de clientes para los entrenadores personales y de entrenadores para aquellas personas que quieren mejorar su salud o rendimiento deportivo.</p>
                <p >Nuestro objetivo es que las personas encuentren a su entrenador ideal y que los entrenadores puedan conseguir más clientes.</p>
                {/* <HeroHighlightDemo /> */}
              </div>
              <div className="flex relative gap-4 w-fit">
                <Button className='w-full'>Quiero buscar un entrenador</Button>
                <Button className='w-full'>Quiero publicar mis servicios</Button>
              </div>
            </div>
            <div className="flex w-fit ">
              <Image
                src="/hero-image.png"
                alt="hero"
                width={1000}
                height={500}
                className="object-contain w-[400px] h-[200px]"
              />
            </div>
          </div>

        </div>

        <div className="flex flex-col h-[40rem] sm:h-[20rem] items-center justify-around sm:flex-row gap-12 max-w-5xl mx-auto w-full dark:bg-black bg-white  dark:bg-grid-white/[0.15] bg-grid-black/[0.1] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

          {/* Esta es dummy data, mapear despues entrenadores desde el backend */}
          {perks.map((perk, index) => {
            return (
              <div key={index} className="relative max-w-[290px] flex flex-col items-center gap-2 bg-sky-100 h-36 w-fit justify-center mx-auto text-center rounded-xl border border-sky-300">
                <h2 className={`${montserrat.className} antialiased text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800 tracking-tight`}>{perk.number}</h2>
                <p className="text-blue-900 text-sm tracking-tighter leading-tight px-3">{perk.title}</p>
              </div>
            )

          })}
        </div>
        <div>
          <h2 className={`${montserrat.className} antialiased text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800 tracking-tighter`}>Conoce nuestros entrenadores</h2>
          <div>
            <TrainerCard />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
