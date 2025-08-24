const BudgetList = ({
  titlePlaceholder = "Input Budget Title",
  amountPlaceholder = "Input Amount",
  buttonText = "ADD",
}) => {
  return (
    <>
      <main className="flex flex-col items-center pt-10 space-y-3">
        <div>
          <input
            type="text"
            className="border border-blue-600 h-10 w-[200px] rounded-lg pl-2 mr-2 placeholder-grey-200"
            placeholder={titlePlaceholder}
          />
          <input
            type="number"
            className="border border-blue-400 h-10 w-[200px] rounded-lg pl-2 placeholder-grey-200"
            placeholder={amountPlaceholder}
          />
          <button className="bg-blue-400 h-10 rounded-lg w-12 ml-2 hover:bg-blue-500">
            {buttonText}
          </button>
        </div>
      </main>
    </>
  );
};
export default BudgetList;
