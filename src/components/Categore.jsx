import react, { useEffect , useState } from "react";
import api from "../api/api.json";

function Category() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const forDataJson = `${api.request}://${api.server}${api.getPath}?key=${api.apikey}&get=category`;
        console.log(forDataJson);
        fetch(forDataJson)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            {categories.map((cat) => (
                <option value={cat.name}>{cat.name}</option>
            ))}
        </>
    );
}
export default Category;
