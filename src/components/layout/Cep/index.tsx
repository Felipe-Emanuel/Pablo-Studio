import { consultarCep, CepResponse, PrecoPrazoResponse } from "correios-brasil";
import { useCartContext } from "@hooks/useCartContext";
import { Button } from "@util/buttons/Button";
import { SectionTitle } from "@util/texts/SectionTitle";
import { Text } from "@util/texts/Text";
import { LocalVector, SearchWhiteVector } from "@vectores/Vectores";
import { FormEvent, useRef, useState } from "react";
import { IMaskInput } from "react-imask";
import { Freight } from "@layout/freight";
import { User } from "@models/User";
import { DocumentData } from "firebase/firestore";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Product } from "@models/Product";
import { Cookies } from "@functions/Cookies";
import { addUser } from "@database/clientData";
import { parseCookies } from "nookies";
import { SearchLoading } from "@animations/searchLoading/SearchLoading";

export type newSelectedFreightCookieType = {
  serviceType: CheckedState | undefined;
  deadline: number;
  price: string;
};

interface CepProps {
  product: DocumentData[] & Product[];
  info?: PrecoPrazoResponse[];
  guestId: string;
  user: DocumentData[] | User[];
}

interface UserGenerator extends CepResponse {
  error: boolean;
}

export function Cep({ product, guestId, user }: CepProps) {
  const { SetCookie } = Cookies();
  const { inputCepValue, isCepLoading, clearCart, updateProductCep, setInputCepValue } =
    useCartContext();
  const { cep = "", city = "", uf = "" } = user && user.length ? user[0] : {};

  const [isVisible, setIsVisible] = useState(false);
  const [erro, setErro] = useState<UserGenerator>();
  const ref = useRef(null);
  const inputRef = useRef(null);
  const cepMask = {
    mask: "00000-000",
  };

  const changeRotate = () => setIsVisible((isVisible) => !isVisible);

  const cookies = parseCookies();
  const guestUser = cookies && cookies._userGuest;

  const userGenerator = (resp: UserGenerator) => {
    const user: User = {
      id: guestId,
      guestId,
      cep: inputCepValue,
      city: resp?.localidade,
      uf: resp?.uf,
      error: {
        cepError: resp?.error,
      },
    };
    return user;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let cookieUser;

    try {
      const resp = await consultarCep(inputCepValue).then(async (resp) => {
        //@ts-ignore
        if (!resp.erro) {
          //@ts-ignore
          setErro(resp.erro);
          cookieUser = userGenerator(JSON.parse(JSON.stringify(resp)));
          SetCookie("_userGuest", cookieUser);

          updateProductCep(product);
          addUser();
        }
      });
      return resp;
    } catch (err) {
      console.error("Erro na adição de CEP", err);
    }
  };

  return (
    <>
      <div
        className="
        w-full h-fit gap-4 bg-placeholder rounded-md
        p-3 flex flex-col sm:flex-row justify-between items-center"
      >
        <div className="flex flex-col justify-between gap-4">
          <SectionTitle icon={<LocalVector />} text="Informe seu CEP" />
          <form onSubmit={(e) => handleSubmit(e)} className="relative">
            <div className="flex gap-4 items-center">
              <IMaskInput
                className="
                  outline-none rounded-md w-full max-w-xs h-11 px-1 border-0 focus:ring-tertiary
                  bg-transparent ring-1 ring-tertiary text-white invalid:ring-danger"
                mask={cepMask.mask}
                unmask={false}
                ref={ref}
                placeholder={guestUser && cep ? cep : "Verifique seu frete"}
                type="text"
                name="cep"
                inputRef={inputRef}
                onAccept={(value) => setInputCepValue(value)}
                value={inputCepValue}
                onChange={() => {}}
              />
              <a
                href="https://www2.correios.com.br/sistemas/buscacep/buscaCep.cfm"
                target="_blank"
              >
                <Text
                  as="span"
                  light
                  text="Não sei meu CEP"
                  className="text-xs truncate hover:text-secondary"
                />
              </a>
            </div>
            <button
              type="submit"
              disabled={inputCepValue.length < 9}
              className="
              p-1 absolute top-1.5 right-24 flex items-center justify-center
              bg-tertiary rounded-md w-8 h-8 transition-all hover:opacity-80
              disabled:opacity-80"
            >
              {isCepLoading ? <SearchLoading /> : <SearchWhiteVector />}
            </button>
          </form>
          <div className="flex gap-1">
            {guestUser && (
              <>
                {erro?.error ? (
                  <>
                    <Text
                      as="span"
                      light
                      text="Cep não encontrado!"
                      className="text-xs md:text-md"
                    />
                  </>
                ) : (
                  city !== "" && (
                    <>
                      <Text
                        as="span"
                        light
                        text={user ? `Destino: ${city} - ${uf}` : ""}
                        className="text-xs md:text-md"
                      />
                    </>
                  )
                )}
              </>
            )}
          </div>
        </div>
        <div className="relative flex items-center w-full max-w-xs h-fit">
          <Button
            isDanger
            text="Esvaziar Carrinho"
            onClick={() => {
              clearCart(guestId);
            }}
          />
        </div>
      </div>
      {city && guestUser && (
        <Freight
          product={product}
          onClick={changeRotate}
          isVisible={isVisible}
        />
      )}
    </>
  );
}
