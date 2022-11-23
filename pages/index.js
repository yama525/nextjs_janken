import { useState } from "react";
import { Hand } from "../components/Hand"

export default function Home() {
  const [computerHand, setComputerHand] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="text-center">
      <header className="w-full bg-gray-100 py-12 text-5xl">
        ジャンケン！！
      </header>
      <main>
        <section className="w-full my-12">
          <ul className="flex justify-center">
            <Hand handNum="0" setComputerHand={setComputerHand} setResult={setResult} hand="グー" />
            <Hand handNum="1" setComputerHand={setComputerHand} setResult={setResult} hand="チョキ" />
            <Hand handNum="2" setComputerHand={setComputerHand} setResult={setResult} hand="パー" />
          </ul>
        </section>
        <section>
          <div className="m-12 text-2xl text-gray-500">
            <p>
              相手は「{computerHand}」を出しました
            </p>
          </div>
          <div className="text-3xl font-bold">
            <p>
              {result}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
