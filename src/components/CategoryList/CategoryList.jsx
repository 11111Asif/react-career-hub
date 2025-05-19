import { useEffect, useState } from "react";
import List from "../List/List";


const CategoryList = () => {
    const [category, setCategory] = useState([])

        useEffect(()=>{
            fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
        }, [])

    return (
        <div className="mt-10">
            <div className="text-center">
                <h2 className="text-4xl">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-4 w-auto gap-5 mt-5">
                {
                    category.map(list => <List key={list.id} list={list}></List>)
                }
            </div>
        </div>
    );
};

export default CategoryList;