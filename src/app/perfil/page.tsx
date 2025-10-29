import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-4 space-y-4 md:space-y-0 mt-8 px-8">

      <div className="mx-auto shadow-2xl bg-white rounded-2xl max-w-[500px] w-full px-8 py-8">
        <ul>
          <li>*Foto*</li>
          <hr></hr>
          <li>Nome:</li>
          <li>Data de entrada:</li>
          <li>Pontos:</li>
          <li>XP:</li>
        </ul>
      </div>
      <div className="mx-auto shadow-2xl bg-white rounded-2xl max-w-[800px] w-full px-8 py-8">
        <ol className="space-y-4">
          <li className="shadow-md rounded-lg max-w-[600px] w-full px-8 py-8 bg-[var(--secondary-color)]">Quiz: métodos ágeis</li>
          <li className="shadow-md rounded-lg max-w-[600px] w-full px-8 py-8 bg-[var(--secondary-color)]">Quiz: planejamento</li>
          <li className="shadow-md rounded-lg max-w-[600px] w-full px-8 py-8 bg-red-600">Quiz: gestão de pessoas </li>
        </ol>
      </div>
    </div>
    </div>
  )
}
