import { Avatar } from "@util/Avatar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-dark">
      <Avatar img="https://www.w3schools.com/howto/img_avatar.png" as={Link} href="/any" alt="avatarIcon" />
    </div>
  );
}
