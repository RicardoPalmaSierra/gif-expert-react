import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h1>{category} {isLoading}</h1>
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifCard key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}