import { useState ,useEffect} from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1);

  // Declare the function before using it
  let generateMaths = () => {
    let num1 = count;
    let num2 = Math.floor(Math.random() * 100);
    const signs = ['+', '-', '*', '/', '**', '%']; // Fixed syntax for the array
    let sign = signs[Math.floor(Math.random() * signs.length)]; // Pick a random sign from the array
    let result;

    switch (sign) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '**':
        result = num1 ** num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '%':
        result = num1 % num2;
        break;
      default:
        result = num1 + num2;
    }

    let expression = `${num1} ${sign} ${num2} is equal to ${result}`;
    return expression;
  };


const [Maths, setMaths] = useState(""); // Initialize with an empty string

  useEffect(() => {
    const generate = generateMaths;
    setMaths(generate());
  }, [count, generateMaths]);

  const colors = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#800080",
    "#FFC0CB",
    "#FF1493",
    "#FF69B4",
    "#FF6347",
    "#8A2BE2",
    "#4682B4",
    "#00CED1",
    "#00FF00",
    "#7FFF00",
    "#32CD32",
    "#FFD700",
    "#FFA07A",
    "#FF4500",
    "#DC143C",
    "#800000",
    "#A52A2A",
    "#D2691E",
    "#B8860B",
    "#808000",
    "#2E8B57",
    "#006400",
    "#008080",
    "#000080",
    "#4B0082",
    "#9400D3",
    "#BA55D3",
    "#800080",
    "#9932CC",
    "#663399",
    "#9370DB",
    "#483D8B",
    "#6A5ACD",
    "#4169E1",
    "#1E90FF",
    "#00BFFF",
    "#87CEEB",
    "#ADD8E6",
    "#F0F8FF",
    "#F0FFFF",
    "#00FFFF",
    "#00CED1",
    "#20B2AA",
    "#48D1CC",
    "#5F9EA0",
    "#4682B4",
  ];

  return (
    <div style={{ textAlign: 'center', backgroundColor: colors[count], width: '100vw', height: '100vh' }}>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1 style={{ filter: "invert(100%)", color: colors[count] }}>Counter</h1>
      <h2 style={{ fontSize: count+20, color: colors[count + 5], filter: "invert(100%)" }}>{count}</h2>
      <div className="card" style={{ color: colors[count] }}>
        <button style={{margin: "0 10px"}} onClick={() => setCount(count < 50 ? count + 1 : alert('You cannot increment above 20'))}>
          Increase {count}
        </button>
        <button style={{margin: "0 10px"}} onClick={() => setCount(count > 0 ? count - 1 : alert('You cannot decrement below 0'))}>
          Decrease {count}
        </button>
        <div style={{color:'black', borderRadius: '10px', backgroundColor: 'lightblue', padding: '10px', width :"40%", margin: '20px auto' ,opacity: '0.7', border: '1px solid black'}}>
          <p >
            Instant Maths
          </p>
          <p>{Maths}</p>
        </div>
      </div>
      <p className="read-the-docs" style={{ color: "black" }}>
        Created By Skand With 💖💘
      </p>
    </div>
  );
}

export default App;

