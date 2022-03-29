import ExpenseItem from "./components/ExpenseItem";
import MakeHeader from "./components/MakeHeader";

function App() {
  return (
    <div>
      <MakeHeader></MakeHeader>
      <h2>Let's gent started!</h2>
      <p>This is visible</p>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
