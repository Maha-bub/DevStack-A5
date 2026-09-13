// import { HiX } from "react-icons/hi";

// const YourStack = ({ selectedCards }) => {
//     return (
//         <div className="sm:mx-auto md:w-3/12 border-2 mt-16 p-5 border-slate-200 rounded-xl space-y-3">
//             <h2 className="text-2xl font-bold ">Your Stacks</h2>
//             <p className="text-[16px] font-semibold">{selectedCards.length} Technology selected</p>
//             {
//                 selectedCards.length === 0 ? <div className="border-2 rounded-2xl my-4 border-slate-400 p-5">Stack is empty!</div> :
//                     <div>
//                         {
//                             selectedCards.map(card => {
//                                 return (

//                                     <>


//                                         <div className="flex gap-4 my-4 border-2 justify-between mx-auto  border-slate-200 rounded-xl px-4 py-2">
//                                             <div className="flex gap-4">
//                                                 <img className={`w-[30px] rounded-xl `} src={card.icon} alt="" />
//                                                 <div className="space-y-1">
//                                                     <h2 className="text-[16px] font-bold">{card.name}</h2>
//                                                     <p className=" text-[#475569] text-sm font-semibold                                                               ko9"> {card.difficulty}</p>
//                                                 </div>
//                                             </div>
//                                             <button onClick={() => handleRemoveCard(card)}><HiX /></button>
//                                         </div>


//                                     </>

//                                 )
//                             })
//                         }
//                         <button
//                             onClick={() => { handleRemoveCardAll() }}
//                             className={`btn bg-pink-100 outline w-full text-red-500 ${selectedCards.length === 0 ? 'hidden' : ''} `}

//                         >Remove All</button>
//                     </div>
//             }


//         </div>
//     );
// };

// export default YourStack;