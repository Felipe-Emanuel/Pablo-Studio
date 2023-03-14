import { CardDescComent } from "src/components/layout/CardDescComent";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-dark">
      <CardDescComent
        titleSize="lg"
        textSize="md"
        title="estátua filósofo grego"
        text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
      />
      <CardDescComent
        titleSize="md"
        textSize="sm"
        title="estátua filósofo grego"
        text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
      />
      <CardDescComent
        avatar
        alt="a"
        img="https://www.w3schools.com/howto/img_avatar.png"
        user="/user"
        titleSize="md"
        textSize="sm"
        title="Pablo"
        text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
      />
    </div>
  );
}
