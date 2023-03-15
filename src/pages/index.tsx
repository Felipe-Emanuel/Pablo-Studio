import { Comments } from "@layout/Comments";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-dark">
      <Comments
        alt="a"
        comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        date="23.06.1998"
        img="https://www.w3schools.com/howto/img_avatar.png"
        userName="Felipe emanuel barbosa viana"
      />
    </div>
  );
}

