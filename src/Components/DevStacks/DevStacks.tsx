import { use, useState } from "react";
import type { DataType } from "../dataType";
import DevStackCard from "./DevStack/DevStackCard";
import { HiX } from "react-icons/hi";
import { toast } from "react-toastify";

interface datastacksProps {
    stackData: Promise<DataType[]>

}
const DevStacks = ({ stackData }: datastacksProps) => {

    const dataStack = use(stackData);
    // console.log(dataStack, 'fetch data')


    const [selectedCards, setselectedCards] = useState<DataType[]>([]);

    const handleSelectedCards = (card: DataType) => {

        const newSelectedCard = [...selectedCards, card];
        setselectedCards(newSelectedCard);
        toast.success(`${card.name} Successfully added to your stack`)


    }

    const handleRemoveCard = (card: DataType) => {
        const remainingCards = selectedCards.filter(selectedCard => selectedCard.name !== card.name);
        setselectedCards(remainingCards);
        toast.warning(`${card.name} Card Remove Successfully!`)

    }
    const handleRemoveCardAll = (card: DataType) => {

        {
            selectedCards.length === 0 ? setselectedCards(newSelectedCard) : setselectedCards([]);
        }
        toast.error(`Your Stacks Empty!`)

    }

    return (
        <div className="max-w-7xl mx-auto ">
            <div>
                <h2 className="text-4xl  font-bold ">Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span> </h2>
                <p className="font-semibold text-[#64748B] ">Pick one technology per category to build your ideal stack.</p>
            </div>


            <div className="flex flex-col-reverse gap-6 md:flex-row md:items-start mt-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16 w-9/12  gap-7 ">
                    {
                        dataStack.map((techStack, idx) => {
                            return <DevStackCard
                                key={idx}
                                techStack={techStack}
                                handleSelectedCards={handleSelectedCards}
                            ></DevStackCard>

                        })
                    }
                </div>
                <div className="sm:mx-auto md:w-3/12 border-2 mt-16 p-5 border-slate-200 rounded-xl space-y-3">
                    <h2 className="text-2xl font-bold ">Your Stacks</h2>
                    <p className="text-[16px] font-semibold">{selectedCards.length} Technology selected</p>
                    {
                        selectedCards.length === 0 ? <div className="border-2 rounded-2xl my-4 border-slate-400 p-5">Stack is empty!</div> :
                            <div>
                                {
                                    selectedCards.map(card => {
                                        return (

                                            <>


                                                <div className="flex gap-4 my-4 border-2 justify-between mx-auto  border-slate-200 rounded-xl px-4 py-2">
                                                    <div className="flex gap-4">
                                                        <img className={`w-[30px] rounded-xl `} src={card.icon} alt="" />
                                                        <div className="space-y-1">
                                                            <h2 className="text-[16px] font-bold">{card.name}</h2>
                                                            <p className=" text-[#475569] text-sm font-semibold                                                               ko9"> {card.difficulty}</p>
                                                        </div>
                                                    </div>
                                                    <button onClick={() => handleRemoveCard(card)}><HiX /></button>
                                                </div>


                                            </>

                                        )
                                    })
                                }
                                <button
                                    onClick={() => { handleRemoveCardAll() }}
                                    className={`btn bg-pink-100 outline w-full text-red-500 ${selectedCards.length === 0 ? 'hidden' : ''} `}

                                >Remove All</button>
                            </div>
                    }


                </div>
            </div>

        </div>
    );
};

export default DevStacks;