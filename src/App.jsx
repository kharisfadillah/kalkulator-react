import { useEffect, useState } from "react";
import TombolFungsi from "./components/TombolFungsi";
import TombolAngka from "./components/TombolAngka";
import TombolNol from "./components/TombolNol";
import TombolOperasi from "./components/TombolOperasi";
import DisplayInput from "./components/DisplayInput";
import DisplayResult from "./components/DisplayResult";

export default function App() {
  useEffect(() => {
    document.title = "Belajar Tailwind - Kalkulator";
  }, []);

  const [input, setInput] = useState("0");
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    console.log(value);
    if (value === "=") {
      setInput(result);
      setResult(String(new Function("return " + result.replace("×", "*"))()));
    } else if (value === "AC") {
      setInput("0");
      setResult("0");
    } else {
      setResult((prev) => {
        if (prev === "0" && value !== "." && value !== "0") {
          return value;
        }
        return prev + value;
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#17181A] p-4 rounded-3xl shadow-md max-w-fit">
        <DisplayInput value={input} />
        <DisplayResult value={result} />
        <div className="mt-4 grid grid-cols-4 gap-2">
          <TombolFungsi label="AC" onClick={handleClick} />
          <TombolFungsi label="±" />
          <TombolFungsi label="%" />
          <TombolOperasi label="÷" onClick={handleClick} />
          <TombolAngka label="7" onClick={handleClick} />
          <TombolAngka label="8" onClick={handleClick} />
          <TombolAngka label="9" onClick={handleClick} />
          <TombolOperasi label="×" onClick={handleClick} />
          <TombolAngka label="4" onClick={handleClick} />
          <TombolAngka label="5" onClick={handleClick} />
          <TombolAngka label="6" onClick={handleClick} />
          <TombolOperasi label="-" onClick={handleClick} />
          <TombolAngka label="1" onClick={handleClick} />
          <TombolAngka label="2" onClick={handleClick} />
          <TombolAngka label="3" onClick={handleClick} />
          <TombolOperasi label="+" onClick={handleClick} />
          <TombolNol onClick={handleClick} />
          <TombolAngka label="." onClick={handleClick} />
          <TombolOperasi label="=" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
