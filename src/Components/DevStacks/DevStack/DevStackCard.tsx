import { IoStar } from "react-icons/io5";
import type { DataType } from "../../dataType";

interface stackProps {
    stackProps: DataType;
}
const DevStackCard = ({ techStack }: stackProps) => {
    console.log(techStack)
    return (

        <div className="container border-2 p-4 border-slate-200 rounded-xl space-y-3">
            <div className="flex justify-between items-center">
                <img className="w-[60px]" src={techStack.icon} alt="" />
                <strong >{techStack.badge}</strong>
            </div>
            <h2>{techStack.name}</h2>
            <p>{techStack.description}</p>
            <hr />
            <div className="flex justify-between">
                <h3>{techStack.category}</h3>
                <h3>{techStack.difficulty}</h3>
                <div className="flex items-center gap-2">
                    <IoStar />{techStack.rating}

                </div>

            </div>
            <button className="btn btn-neutral w-full">Add to Stack</button>

        </div>
    );
};

export default DevStackCard;