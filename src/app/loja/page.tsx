"use client";
import Navbar from "@/components/Navbar"

export default function Home() {

  type Produto = {
    id: number;
    name: string;
    price: number;
  };

    const produtos: Produto[] = [
    { id: 1, name: "Dicas da questão", price: 100 },
    { id: 2, name: "Uma resposta garantida na prova", price: 300 },
    { id: 3, name: "Prova completa", price: 500 },
  ];

    function comprar(produto: Produto) {
      alert("Você comprou: " + produto.name + " por " + produto.price + " pontos")}

  return (
    <div>
      <Navbar/>

        <div className="mx-4 md:mx-auto shadow-2xl bg-white rounded-2xl max-w-[1000px] w-full px-4 md:px-8 py-8">
          <ul className="space-y-4">
            {produtos.map((produto) =>
              <li key={produto.id} className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="min-w-0 truncate">{produto.name}</span>
                <button onClick={() => comprar(produto)} className="cursor-pointer shadow-md hover:shadow-[0_4px_6px_rgba(74,144,226,1)] transition-shadow block p-2 w-20 text-center rounded-lg border border-gray-200 text-gray-700 hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)]">{produto.price}</button>
              </li>
            )}
          </ul>
        </div>
    </div>
  )
}

//<button className="self-center px-6 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition">Comprar</button>
