import { Suspense } from "react";
import type { DataType } from "./Components/dataType";
import DevStacks from "./Components/DevStacks/DevStacks";
import Hero from "./Components/Hero"
import NavHeader from "./Components/NavHeader"

const DevStacksData = async (): Promise<DataType> => {
  const response = await fetch('/stackData.json');
  const data = await response.json();
  return data;
}
function App() {


  const stackData = DevStacksData();
  console.log(stackData)

  return (
    <>

      <NavHeader></NavHeader>
      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-spinner text-secondary"></span>}>

        <DevStacks stackData={stackData}></DevStacks>
      </Suspense>



    </>
  )
}

export default App
