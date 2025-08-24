const ExpenseList = ({
  // props
  placeholderTitle = "Expense Title",
  placeholderAmount = "Expense Amount",
  buttonText = "ADD",
}) => {
  return (
    <div>
      <input
        type="text"
        className="border border-blue-400 h-10 w-[200px] rounded-lg pl-2 mr-2 placeholder-grey-200"
        placeholder={placeholderTitle}
      />
      <input
        type="number"
        className="border border-blue-400 h-10 w-[200px] rounded-lg pl-2 placeholder-grey-200"
        placeholder={placeholderAmount}
      />
      <button className="bg-blue-400 h-10 rounded-lg w-12 ml-2 hover:bg-blue-500">
        {buttonText}
      </button>
    </div>
  );
};
export default ExpenseList;
