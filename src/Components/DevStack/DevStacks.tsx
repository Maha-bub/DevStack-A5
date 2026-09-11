import { use } from "react";
import type { DataType } from "../dataType";

// interface datastacksProps {
//     stackData: Promise<DataType[]>
// }
const DevStacks = ({ stackData }) => {

    const dataStack = use(stackData);
    console.log(dataStack,'fetch data')
    return (
        <div>
            {/* <h2>dataStack:{dataStack.length}</h2> */}
        </div>
    );
};

export default DevStacks;