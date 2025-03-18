import { Card, CardTitle, CardContent, CardHeader, CardDescription } from "./card";
import Link from "next/link";
function StockCard({stock, title, button}){
    return(
    <Card className="w-[12vw]">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                Valor Actual: 30$
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Link href={{button} || "#"}  className="bg-black text-white p-2 px-4 rounded-md">Ver más</Link>
        </CardContent>
    </Card>
    )
}

export default StockCard;