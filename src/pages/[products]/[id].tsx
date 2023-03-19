import { Section } from "@container/section";
import { Comments } from "@layout/Comments";
import { SelectedCard } from "@layout/selectedCard";
import { Container } from "src/components/containers/Container";

export default function Product() {
  let id = 0;

  const images = [
    "https://picsum.photos/seed/1/800/600",
    "https://picsum.photos/seed/2/800/600",
    "https://picsum.photos/seed/3/800/600",
    "https://picsum.photos/seed/4/800/600",
    "https://picsum.photos/seed/5/800/600",
  ];

  const comments = [
    {
      id: id++,
      img: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      alt: "a",
      date: "23.06.2023",
      userName: "Felipe",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: id++,
      img: "https://aui.atlassian.com/aui/7.9/docs/images/avatar-96.png",
      alt: "a",
      date: "02.02.2023",
      userName: "Paulo",
      comment:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
    },
    {
      id: id++,
      img: "https://artcorgi.com/wp-content/uploads/2014/09/bored.png",
      alt: "a",
      date: "10.12.2023",
      userName: "Pablo",
      comment:
        "by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
    },
    {
      id: id++,
      img: "https://artcorgi.com/wp-content/uploads/2014/09/confused1.png",
      alt: "a",
      date: "31.07.2022",
      userName: "Ana",
      comment:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    },
  ];

  return (
    <Container pageTitle="Pablo Studio 3D | Nome do Produto">
      <SelectedCard
        images={images}
        productName="Nome do Produto"
        productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        productViews={3560}
        productPrice="125,00"
        productQtd={15}
      />
      <hr className="relative border xl:pt-8 border-transparent border-b-white my-auto" />
      <Section>
        <Comments data={comments} />
      </Section>
    </Container>
  );
}
