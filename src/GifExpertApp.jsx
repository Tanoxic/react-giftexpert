import { Fragment, useState } from 'react';
import GifGrid from './components/GifGrid';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //return per sortir de la funció i no s'executa rres mes
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <Fragment>
            <h1>GifExpertApp</h1>
            {/*Tambe seria correcte passar directament per props del component el setcategories
Pero així separem l'actualitzacio del setCategories a la funcio onAddCategory
            */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </Fragment>
    )
}

export default GifExpertApp