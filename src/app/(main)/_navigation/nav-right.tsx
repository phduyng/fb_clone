import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";

const NavRight = () => {
  return (
    <div className="bg-pink-500 flex-end pr-6">
      <Dialog modal={true}>
        <DialogTrigger>
          <Avatar>
            <AvatarImage src="/facebook.png" />
            <AvatarFallback />
          </Avatar>
        </DialogTrigger>
        <DialogContent className="p-3.5 shadow-lg rounded-lg top-[3.25rem] right-4 400:w-[22.5rem] w-[18rem] bg-bg-2">
          <div className="bg-bg-2 shadow-lg w-auto">
            <span>Your name</span>
          </div>
          <ModeToggle />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavRight;
