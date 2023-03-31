import { useState } from "react";
import { Container } from "@container/Container";
import { ProgressRing } from "@layout/ProgressRing";

export default function Cart() {
  const [a, b] = useState(20);

  return (
    <Container pageTitle="Pablo Studios 3D | Carrinho">
      <div className="relative flex items-center top-10 w-[75vw]">
        <div className="flex justify-center items-center w-fit h-10  transition-all duration-300">
          <ProgressRing value={a} max={100} color="#23CAD4" />
        </div>
      </div>

      <button
        onClick={() => b(a + 20)}
        className="text-primary z-50"
        disabled={a === 100 ? true : false}
      >
        Continuar
      </button>
    </Container>
  );
}
