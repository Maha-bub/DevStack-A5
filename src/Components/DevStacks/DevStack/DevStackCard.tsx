import { IoStar } from "react-icons/io5";
import type { DataType } from "../../dataType";

interface stackProps {
    stackProps: DataType;
}

const badgeStyles = {
    Popular: "bg-[#F0F9FF] text-[#85E1FC]",
    Fast: "bg-[#FFF7ED] text-[#FF855B]",
    Versatile: "bg-[#ECFDF5] text-[#41B883]",
    Easy: "bg-[#F3E8FF] text-[#B37DE4]",
    Essential: "bg-[#DCFCE7] text-[#54A773]",
    Containers: "bg-[#DBEAFE] text-[#6387E6]",
    Top_SQL: "bg-[#DBEAFE] text-[#6286E6]",
    Flexible: "bg-[#F3E8FF] text-[#B37DE4]",
    Modern: "bg-[#CFFAFE] text-[#1E667C]",


}
const DevStackCard = ({ techStack }: stackProps) => {
    console.log(techStack)
    return (

        <div className="border-2 p-5 border-slate-200 rounded-xl space-y-3">
            <div className="flex justify-between items-center">
                <img className={`w-[40px] p-2 rounded-full  ${badgeStyles[techStack.badge]}`} src={techStack.icon} alt="" />


                <strong
                    className={`px-2 py-1 rounded-xl text-sm font-semibold ${badgeStyles[techStack.badge]}`}
                >{techStack.badge}
                </strong>

            </div>
            <h2 className="text-2xl font-semibold">{techStack.name}</h2>
            <p className="text-lg text-[#475569]">{techStack.description}</p>
            <hr />
            <div className="flex justify-between items-center">
                <h3 className="bg-gray-200 px-2 py-1 rounded text-[#475569]">{techStack.category}</h3>
                <h3 className=" text-[#475569] text-sm font-semibold">{techStack.difficulty}</h3>
                <div className="flex items-center gap-2 text-sm font-semibold">
                    <IoStar className=" text-yellow-400" />{techStack.rating}

                </div>

            </div>
            <button className="btn btn-neutral w-full">Add to Stack</button>

        </div>
    );
};

export default DevStackCard;