import react,{ useState } from "react";
import useCategory from "../../hooks/useCategore";
import Table from "../Table"


// icons 
import { RiPlayListAddFill } from "react-icons/ri";





export default function Categ() {
    const categories = useCategory();
    const [catVale , setCat] = useState();


    const catgPost = () =>{
        const jsonConvart = {name:catVale};
        console.log(jsonConvart);
    }

    return (
        <>
            <div className="flex center medel w50%">
                <div className="w50">
                    <div className="grap">
                        <label>Category Type Insert</label>
                        <br />
                        <div className="fx">
                            <input
                                type="text"
                                className="fxInput"
                                placeholder="e.g."
                                onChange={(e) => setCat(e.target.value)}
                            />
                            <button onClick={catgPost} className="fxBtn">
                                <RiPlayListAddFill /> Add
                            </button>
                        </div>
                    </div>
                    <div className="flex">
                        <details>
                            <summary>View Category List</summary>
                            <Table tableData={categories} title={"Category"} />
                        </details>
                    </div>
                </div>
            </div>
        </>
    );
}
