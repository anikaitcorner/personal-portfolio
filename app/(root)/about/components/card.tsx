import { cn } from "@/lib/utils";

interface ICard{
    className?:string
}

export const Card:React.FC<ICard> = ({className}) => {
  return (
    <div className={cn("w-20 overflow-hidden rounded-md transition-all duration-500 hover:w-96",className)}>
      <img
        className="h-full w-full object-cover"
        src="/images/projects/project-one.jpg"
        alt="lifestyle"
        width="1380"
        height="1380"
      />
    </div>
  );
};
