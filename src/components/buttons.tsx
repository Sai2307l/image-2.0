import { Button } from "@/components/ui/button";

type propsType = {
  className: string;
};

const buttons = (props: propsType) => {
  return (
    <div className={props.className}>
      <div className="flex items-center justify-center mb-6">
        <Button
          variant="ghost"
          className="hover:bg-green-400 font-bold p-4 m-4"
        >
          Green
        </Button>
        <Button variant="ghost" className="hover:bg-red-400 font-bold p-4 m-4">
          Red
        </Button>
        <Button
          variant="ghost"
          className="hover:bg-indigo-400 font-bold p-4 m-4"
        >
          Indigo
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          className="hover:bg-slate-500 font-bold p-4 m-4"
        >
          64GB
        </Button>
        <Button
          variant="ghost"
          className="hover:bg-slate-500 p-4 m-4 font-bold"
        >
          128GB
        </Button>
        <Button
          variant="ghost"
          className="hover:bg-slate-500 p-4 m-4 font-bold"
        >
          256GB
        </Button>
      </div>
    </div>
  );
};

export default buttons;
