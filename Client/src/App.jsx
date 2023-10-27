import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
});

// Using useEffect for single rendering
useEffect(() => {
  // const url = "https://zillow-com1.p.rapidapi.com/property";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json;charset=UTF-8",
  //   },
  //   fetch(url, options).then((res) => {
  //     res.json().then((data) => {
  //       console.log(data)
  //     })
  //   })
  // }
    fetch("http://127.0.0.1:5000/hello").then((res) =>
        res.json().then((data) => {
            console.log(data)
        })
    );
}, []);



  return (
    <>
      <main className='flex flex-col items-center justify-center h-screen bg-indigo-950 text-center'>
      <div className='w-1/2 border-double border-4 border-blue-400 p-2'>
          <div className='bg-indigo-300 text-6xl py-8'>
            Guess the House Price!
           </div>
           <div className='bg-indigo-300 text-3xl p-3'> 
           Housle is a daily trivia game where you guess the list price of houses!
           </div>
           <div className='bg-indigo-300 p-3'>
           THE BASICS
Guess the asking price of a house within six tries. With each incorrect attempt, you'll learn if you guessed too high or too low, and then receive a new photo and clue.
           </div>
           <div className='bg-indigo-300'>
           <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Play Now!
            </button>
          </div>
      </div>
      </main>
    </>
  )
}

export default App
