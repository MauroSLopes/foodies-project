import Link from "next/link";

export default function MealsMainPage(){
    return (
        <main>
            <h1>Meals Page!</h1>
            <p><Link href="/meals/hamburguer">Hamburguer</Link></p>
        </main>
    )
}