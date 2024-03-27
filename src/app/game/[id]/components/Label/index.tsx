interface ILabelProps {
  name: string;
}

export const Label = ({ name }: ILabelProps) => {
  return (
    <div className="flex-grow sm:flex-grow-0 py-1 px-3 bg-slate-300 text-black text-center rounded-lg hover:font-bold duration-300">
      {name}
    </div>
  );
};
