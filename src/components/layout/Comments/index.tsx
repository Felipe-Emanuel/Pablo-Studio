import { CardDescComent } from "@layout/CardDescComent";

interface CommentsProps {
  img: string;
  alt: string;
  date: string;
  userName: string;
  comment: string;
}

export function Comments({ date, alt, img, userName, comment }: CommentsProps) {
  return (
    <div className="max-h-56 overflow-hidden">
      <CardDescComent
        avatar
        date={date}
        user="/profile"
        alt={alt}
        titleSize="md"
        textSize="sm"
        img={img}
        title={userName}
        text={comment}
      />
    </div>
  );
}
