// import { useState, useEffect } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <h1>React Counter App</h1>

//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <button onClick={() => setCount(count - 1)}>
//         Decrease
//       </button>

//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   );
// }












// // useState(0)	Stores the counter value.
// // setCount()	Updates the counter when a button is clicked.
// // useEffect()	Runs the browser-title update after rendering.
// // [count]	Runs the Effect again whenever count changes.





























import UserContext from "./UserContext";
import Student from "./Student";

function App() {
  const name = "Rahul";

  return (
    <UserContext.Provider value={name}>
      <Student />
    </UserContext.Provider>
  );
}

export default App;