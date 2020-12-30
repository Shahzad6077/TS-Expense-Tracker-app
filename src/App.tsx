import InsertExpense from "./Components/InsertExpense";
import BalanceWrapper from "./Components/BalanceWrapper";
import Header from "./Components/Header";
import History from "./Components/History/History";
import { Layout } from "./Utils";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Layout>
          <BalanceWrapper />
          <History />
          <InsertExpense />
        </Layout>
      </div>
    </div>
  );
}

export default App;
