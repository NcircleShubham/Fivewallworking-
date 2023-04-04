import React from 'react'

const Fivewall = () => {
    const Clickble =()=>{
        console.log('click')
    }
  return (
    <div>
        <div className='w-56 h-52 bg-slate-700 border-2 border-indigo-600' onClick={Clickble}></div>
        <div className='w-56 h-52 bg-slate-700 border-2 border-indigo-600' onClick={Clickble}></div>
        <div className='w-56 h-52 bg-slate-700 border-2 border-indigo-600' onClick={Clickble}></div>
        <div className='w-56 h-52 bg-slate-700 border-2 border-indigo-600' onClick={Clickble}></div>
        <div className='w-56 h-52 bg-slate-700 border-2 border-indigo-600' onClick={Clickble}></div>
    </div>
  )
}

export default Fivewall