import { use, useState } from "react";
import type { DataType } from "../dataType";
import DevStackCard from "./DevStack/DevStackCard";

interface datastacksProps {
    stackData: Promise<DataType[]>
}
const DevStacks = ({ stackData }: datastacksProps) => {

    const dataStack = use(stackData);
    console.log(dataStack, 'fetch data')


    // const [selectedDevStack, setSeletectedDevStack] = useState<DataType[]>([]);

    // const handleSelectedDevStack = () => {
    //     console.log(stackData)

    // }
    return (
        <div className="grid gric1 md:grid-cols-2 lg:grid-cols-3">

            {
                dataStack.map((techStack, idx) => {
                    return <DevStackCard key={idx} techStack={techStack}></DevStackCard>

                })
            }
        </div>
    );
};

export default DevStacks;