export default function MealsDynamicPage({ params }){
    return (
        <main>
            <h1>This page is {params.slug}</h1>
        </main>
    )
}