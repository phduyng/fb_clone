import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const NavLeft = () => {
  return (
    <div className="bg-sky-500 pl-4">
      <Link href="/">
        <Avatar>
          <AvatarImage src="/facebook.png" />
          <AvatarFallback />
        </Avatar>
      </Link>
    </div>
  );
};

export default NavLeft;
