import { useState } from "react";
import Buton from "./components/classComponent";
import Paper from "./components/functionComponent";
import Search from "./components/refTest";
import Filter from "./components/filter";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible);
  return (
    <div>
      {/*<Buton />*/}
      {/* <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? "Gizle" : "Göster"}
      </button>
      {isVisible && <Paper />} */}
      {/* <Search /> */}
      <Filter />
    </div>
  );
}

export default App;

const input = document.getElementById("input");
