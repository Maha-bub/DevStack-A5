import { IoStar } from "react-icons/io5";
import type { DataType } from "../../dataType";

interface stackProps {
    stackProps: DataType;
}
const DevStackCard = ({ techStack }: stackProps) => {
    console.log(techStack)
    return (

        <div>
            <div className="flex justify-between items-center">
                <img className="w-[60px]" src={techStack.icon} alt="" />
                <strong >{techStack.badge}</strong>
            </div>
            <h2>{techStack.name}</h2>
            <p>{techStack.description}</p>
            <hr />
            <div>
                <h3>{techStack.category}</h3>
                <h3>{techStack.difficulty}</h3>
                <h3><IoStar />{techStack.rating}</h3>

            </div>

        </div>
    );
};

export default DevStackCard;