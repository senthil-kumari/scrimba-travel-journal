import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data.js";
function App() {
  const entries = data.map((item) => <Entry key={item.id} entry={item} />);
  return (
    <>
      <Header />
      <main className="container">{entries}</main>
    </>
  );
}

export default App;
