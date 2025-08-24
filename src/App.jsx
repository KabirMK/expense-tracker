import BudgetList from "./Components/BudgetList";
import ExpenseList from "./Components/ExpenseList";
import BalanceList from "./Components/BalanceList";
import ExpenseInput from "./Components/ExpenseInput";
import BudgetInput from "./Components/BudgetInput";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// Sample data for the bar chart
const analyticsData = [
  { name: "Groceries", Budget: 300000, Expenses: 65000 },
  { name: "Utilities", Budget: 200000, Expenses: 35000 },
];
import { Underline } from "lucide";
function App() {
  return (
    <>
      <div className="flex  h-screen overflow-hidden">
        <div className="w-1/2 flex flex-col items-center border-r-2 border-gray-300 ml-4 border mt-4">
          <div>
            <h1 className="text-center text-blue-500 font-bold pt-5 text-2xl">
              BUDGET & EXPENSE TRACKER
            </h1>
            <div className="pb-3">
              <BudgetInput />
            </div>
            <div>
              <ExpenseInput />
            </div>
          </div>
          {/* hard code budget and expenses */}
          <h1 className=" text-green-500 font-bold pt-5 text-2xl underline pb-2">
            BUDGET
          </h1>
          <div className="space-y-2">
            <BudgetList name="Groceries" amount="NGN300,000" />
            <BudgetList name="Utilities" amount="NGN200,000" />
          </div>
          <h1 className=" text-red-500 font-bold pt-5 text-2xl underline pb-2">
            EXPENSES
          </h1>
          <div className="space-y-2 ">
            <ExpenseList name="Groceries" amount="NGN65,000" />
            <ExpenseList name="Utilities" amount="NGN35,000" />
          </div>
          <div>
            <BalanceList />
          </div>
        </div>
        <div className=" items-center w-1/2 border-r-2 border-gray-300 mr-4 border mt-4">
          <p className=" text-blue-500 font-bold  text-2xl underline pb-2 pt-5">
            HISTORY
          </p>
          <div className="space-y-2 p-7 rounded-lg ">
            <div className="space-y-6 ">
              <details>
                <summary>MARCH</summary>
                <div className="space-y-2 pt-2">
                  <ExpenseList
                    name="Utilities"
                    amount="₦35,000"
                    date="2/1/24"
                  />
                  <BudgetList name="Groceries" amount="₦30,000" date="1/3/25" />
                </div>
              </details>
              <details>
                <summary>APRIL</summary>
                <div className="space-y-2 pt-2">
                  <ExpenseList
                    name="Utilities"
                    amount="₦35,000"
                    date="2/1/24"
                  />
                  <BudgetList name="Groceries" amount="₦30,000" date="1/3/25" />
                </div>
              </details>
              <details>
                <summary>MAY</summary>
                <div className="space-y-2 pt-2">
                  <ExpenseList
                    name="Utilities"
                    amount="₦35,000"
                    date="2/1/24"
                  />
                  <BudgetList name="Groceries" amount="₦30,000" date="1/3/25" />
                </div>
              </details>
              <details>
                <summary>JUNE</summary>
                <div className="space-y-2 pt-2">
                  <ExpenseList
                    name="Utilities"
                    amount="₦35,000"
                    date="2/1/24"
                  />
                  <BudgetList name="Groceries" amount="₦30,000" date="1/3/25" />
                </div>
              </details>
              <details>
                <summary>JULY</summary>
                <div className="space-y-2 pt-2">
                  <ExpenseList
                    name="Utilities"
                    amount="₦35,000"
                    date="2/1/24"
                  />
                  <BudgetList name="Groceries" amount="₦30,000" date="1/3/25" />
                </div>
              </details>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="underline text-center text-blue-500 font-bold pt-5 text-2xl">
              ANALYTICS
            </h1>
            <div className="w-full flex justify-center items-center mt-4">
              <div className="bg-white rounded-lg shadow p-4 w-full max-w-[500px] ">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Budget" fill="#22c55e" name="Budget" />
                    <Bar dataKey="Expenses" fill="#ef4444" name="Expenses" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
