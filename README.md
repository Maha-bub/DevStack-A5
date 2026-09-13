**Dev Stack Technologies** — A modern web app for exploring and building customized technology stacks, built to practice React fundamentals including JSX, Props, State, Hooks, Lifting State Up, and component-based development.

**Tech Stack:** 
1. React.js (TypeScript), 
2. Tailwind CSS,
3. React Icons,
4. React Toastify, 
5. Vite etc

**Features**
1.Add selected cards from cards componets
2.Delete Individual Items from a state,
3.Conditional functionallytu


**What is JSX, and why is it used in React?**
Answer:JavaScript xml file called jsx, its used html file inside the react components.
**What is the difference between props and state?**
Props is a components property like function argumets and a componets received a props like a parameter,
state is a componets position, when we interacte a componets it will re render from state
**What does the useState hook do, and where did you use it in this project?**
useState hook allows functional components to store and manage local state.
**What does the useEffect hook do, and why did you need it to load the JSON data?**
useEffect hooks handle side effect in react componets and load data.
It was needed to fetch and load the initial data from the local JSON file.

**Why does every item in a .map() list need a unique key prop?**
key props used for identify every item which items n a lost have been changed.
**What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means apply display data or ui style based on conditon.
Example: <button onClick={() => { handleRemoveCardAll() }} className={`btn bg-pink-100 outline w-full text-red-500 ${selectedCards.length === 0 ? 'hidden' : ''} `}>Remove All</button>
**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent function send data through Props, and child send data through callback function