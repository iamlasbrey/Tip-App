import React,{ useState, useEffect } from 'react'

const Tipster = () => {
    const [ amount, setAmount ] = useState(0)
    const [ people, setPeople ] = useState(0)
    const [ total, setTotal ] = useState(0)
    const [ percentage, setPercentage ] = useState(0)
    const [ tips, setTips] = useState(0)
    const [ visible, setVisible] = useState(false)


        useEffect(()=>{
            compute()
        })
    
    const compute=()=>{
        if(amount > 1 && percentage > 1 && people){
            const persons = amount / people
            const unroundtips = (percentage / 100 ) * persons
            const tips = Math.round(unroundtips * 100) / 100
            setTips(tips)
            const roundedtotal = Math.round((persons + tips) * 100) / 100
            setTotal(roundedtotal)  
        }      
    }

    
    const addme=()=>{
        if(percentage < 100){
            setPercentage(percentage + 5)
        }else{
            setPercentage(100)
        }
    }

    const minusMe=()=>{
        if(percentage > 0){
            setPercentage(percentage - 5)
        }else{
            setPercentage(0)
        }
    }

    const setPercert1=()=>{
        setPercentage(5)
    }

    const setPercert2=()=>{
        setPercentage(10)
    }
    
    const setPercert3=()=>{
        setPercentage(15)
    }
    
    const setPercert4=()=>{
        setPercentage(25)
    }
    
    const setPercert5=()=>{
        setPercentage(50)
    }

    const handlevisible=()=>{
        setVisible(!visible)
    }

    const reset=()=>{
        setAmount(0)
        setPeople(0)
        setPercentage(0)
        setTotal(0)
        setTips(0)
    }
    
    return (
        <div className="main-container">
            <div className="tip-container">
                <div className=" w-full lg:w-5/12">
                    <h1 className="font-sans font-bold text-blue-400 text-l mb-2">Bill</h1>
                    <div className="mb-6">
                        <h1 className="absolute pl-4 pt-1 text-blue-400">₦</h1>
                        <input 
                        type="number"
                        min="0"
                        className="text-right pl-4 w-full h-8 focus:outline-none focus:ring focus:border-blue300 bg-blue-200 rounded-sm text-blue-400" 
                        onChange={e=>setAmount(e.target.value)}
                        />
                    </div>
                    <h1 className="font-sans font-bold text-blue-400 text-l mb-2">Select Tip % </h1>
                    <div className='flex items-center justify-evenly mb-4'>
                        <div className='rounded-full bg-yellow-200 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-blue-400' onClick={addme}>
                            <svg className="w-6 h-6 text-blue-400 hover:text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></div>
                        <div className='text-blue-400 font-mono font-bold text-2xl'>{percentage}%</div>
                        <div className='rounded-full bg-yellow-200 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-blue-400' onClick={minusMe}>
                        <svg className="w-6 h-6 text-blue-400 hover:text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mb-4 md:grid-cols-3'>
                        <button onClick={setPercert1} className="buttons">5%</button>
                        <button onClick={setPercert2} className="buttons">10%</button>
                        <button onClick={setPercert3} className="buttons">15%</button>
                        <button onClick={setPercert4} className="buttons">25%</button>
                        <button onClick={setPercert5} className="buttons">50%</button>
                        <button onClick={handlevisible} className='bg-blue-400  p-2 text-yellow-300 text-sm font-bold rounded-md font-mono'>Custom</button>
                    </div>
                    {visible && <input type="number" min="0" className="mb-4 text-right pl-4 h-8 focus:outline-none focus:ring focus:border-blue-300 bg-blue-200 rounded-sm text-blue-400 font-bold" onChange={e=>setPercentage(e.target.value)}/>}
                    <h1 className="font-sans font-bold text-blue-400 text-l mt-2">Number Of People</h1>
                    <div>
                        <svg className="w-8 h-6 absolute pl-4 pt-2 text-blue-400 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        <input type="number" min="0" className='text-right mb-4  pl-4 h-8 focus:outline-none focus:ring focus:border-blue-300 bg-blue-200 rounded-sm text-blue-400 font-bold'onChange={e=>setPeople(e.target.value)}/>
                    </div>
                    {/* <button onClick={compute} className='border-2 bg-blue-400 px-8 py-2 font-bold text-xl  text-yellow-300 mt-3 mb-3 rounded-lg'> Calculate Tips</button> */}
                </div>
                <div className='bg-yellow-200 w-full p-6 rounded-lg lg:w-6/12'>
                    <div className='flex items-center justify-between mb-4'>
                        <h1 className='font-sans font-bold text-blue-400 text-xl md:text-l'>Tip Amount <p className="text-lg">/ person</p></h1>
                        <h1 className="text-3xl text-blue-400 font-bold font-mono nd:text-2xl">₦{tips}</h1>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-sans font-bold text-blue-400 text-xl'>Total<p className="text-lg">/ person</p></h1>
                        <h1 className="text-3xl text-blue-400 font-bold font-mono">₦{total}</h1>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className='bg-blue-400 px-10 py-2 font-bold text-xl text-yellow-300 hover:bg-yellow-300 hover:text-blue-400 rounded-lg font-sans' onClick={reset} >RESET</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tipster
