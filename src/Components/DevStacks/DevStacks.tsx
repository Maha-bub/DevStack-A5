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
        <div className="max-w-7xl mx-auto ">
            <div>
                <h2 className="text-4xl  font-bold ">Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span> </h2>
                <p className="font-semibold text-[#64748B] ">Pick one technology per category to build your ideal stack.</p>
            </div>


            <div className="flex gap-3">
                <div className="grid gric1 md:grid-cols-2 lg:grid-cols-3 mt-16 w-9/12  gap-7">
                    {
                        dataStack.map((techStack, idx) => {
                            return <DevStackCard key={idx} techStack={techStack}></DevStackCard>

                        })
                    }
                </div>
                <div className="w-3/12 border-2 mt-16 p-5 border-slate-200 rounded-xl space-y-3">
                    <h2 className="text-2xl font-bold ">Your Stacks</h2>


                </div>
            </div>

        </div>
    );
};

export default DevStacks;