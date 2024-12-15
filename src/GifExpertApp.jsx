import { useState } from "react";
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'League of Legends']);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                // setCategories={setCategories} 
                onNewValue={onAddCategory} />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    );
}