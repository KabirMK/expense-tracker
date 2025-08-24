import { Trash2, SquarePen } from "Lucide-react";
const BudgetList = ({ name = "", amount = "" }) => {
  return (
    <>
      <div className="flex justify-between border rounded-lg w-[480px] h-12 p-2 border-black pb-3">
        <h1>{name}</h1>
        <h1>{amount}</h1>
        <div className="space-x-1">
          <SquarePen className="inline cursor-pointer size-5" />
          <Trash2 className=" inline cursor-pointer size-5" color="red" />
        </div>
      </div>
    </>
  );
};
export default BudgetList;
