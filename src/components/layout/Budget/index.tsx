import { Button } from "@util/buttons/Button";
import { Text } from "@util/texts/Text";
import { useRouter } from "next/router";

interface BudgetProps{
  className?: string;
  neverDesappear?: boolean;
}

export function Budget({className, neverDesappear}: BudgetProps) {
  const texts = ["Gostaria de algo mais específico?", "Que tal um desenho seu no seu quadro?", "Um Personagem do qual é fã?", "Quem sabe um presente?"]

  const router = useRouter();
  const handleClick = (href: string) => router.push(href);

  return (
    <div className={`${neverDesappear ? 'flex flex-col' : 'flex flex-col md:hidden xl:flex xl:flex-col w-fit h-fit p-1 md:p-3 rounded-md'} ${className}`}>
      {texts.map((text, i) => <Text key={i} light className="text-xs md:text-md leading-6 md:leading-10" text={text} />)}
      <div className="min-[500px]:hover:animate-wiggle w-full max-w-xs">
        <Button onClick={() => handleClick("/budget")} className="mt-2 md:mt-4" text="Fazer Orçamento" isTertiary />
      </div>
    </div>
  )
}



