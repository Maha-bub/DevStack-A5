import { use, useState } from "react";
import type { DataType } from "../dataType";

interface datastacksProps {
    stackData: Promise<DataType[]>
}
const DevStacks = ({ stackData }: datastacksProps) => {

    const dataStack = use(stackData);
    console.log(dataStack, 'fetch data')


    const [selectedDevStack, setSeletectedDevStack] = useState<DataType[]>([]);

    const handleSelectedDevStack = () => {
        console.log(stackData)

    }
    return (
        <div>
            {/* <h2>dataStack:{dataStack.length}</h2> */}
        </div>
    );
};

export default DevStacks;