"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import ClickSpark from "@/blocks/Animations/ClickSpark/ClickSpark";
import Link from "next/link";
import StockCard from "@/components/ui/stockCard";
export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    window.location.href = `https://www.google.com/search?q=${query}`;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <ClickSpark sparkColor="#000" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400} >
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
          <div className="logo flex items-center">
            <p className="text-3xl mr-2">Busca</p>
            <RotatingText texts={['Acciones', 'Codigo', 'Finanzas', 'Noticias']} mainClassName="px-2 sm:px-2 md:px-5 md:py-2 bg-emerald-400 text-white text-3xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg" staggerFrom={"last"} initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1" transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000} />
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Busca algo..."
              className={""}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button type="submit" className={"bg-black text-white cursor-pointer"} onClick={handleSearch}>Buscar</Button>
          </div>
          <div>
            <Link href={"https://www.youtube.com/"} className="mr-4">YouTube</Link>
            <Link href={"https://finance.yahoo.com/"} className="mr-4">Finances</Link>
            <Link href={"https://web.whatsapp.com/"} className="mr-4">Whatsapp</Link>
            <Link href={"https://docs.google.com/document/u/0/"} className="mr-4">Docs</Link>
            <Link href={"https://docs.google.com/spreadsheets/u/0/"} className="mr-4">Sheets</Link>
          </div>
          <div className="flex gap-4 mt-12">
            <StockCard stock={"USD"} title={"USD -> CLP"} button={"Ver más"} />
            <StockCard stock={"USD"} title={"SP500"} button={"Ver más"} />
            <StockCard stock={"USD"} title={"NASDAQ"} button={"Ver más"} />
            <StockCard stock={"USD"} title={"XRP"} button={"Ver más"} />

          </div>
        </div>
      </ClickSpark>
    </div>
  );
}
