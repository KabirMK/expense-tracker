const BalanceList = () => {
  return (
    <main className="flex justify-between  border rounded-lg w-[480px] h-24 p-5 border-black mt-10 font-bold">
      <div>
        <p className="text-sm text-gray-500">TOTAL BUDGET</p>
        <p className="text-xl font-bold text-green-600"> NGN500,000</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">TOTAL EXPENSES</p>
        <p className="text-xl font-bold text-red-600"> NGN100,000</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">BALANCE</p>
        <p> NGN400,000</p>
      </div>
    </main>
  );
};
export default BalanceList;
