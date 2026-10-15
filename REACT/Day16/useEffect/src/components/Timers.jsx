import { useEffect, useRef, useState } from 'react'

const Timers = () => {
    const [count, setCount] = useState(0)
    const timer = useRef(null)

    const startTimer = () => {
        if (timer.current !== null) return

        timer.current = setInterval(() => {
            setCount((p) => p + 1)
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timer.current)
        timer.current = null
    }

    const reset = () => {
        stopTimer()
        setCount(0)
    }

    useEffect(() => {
        return () => {
            clearInterval(timer.current)
        }
    }, [])

    return (
        <>
            <div className='bg-gray-300 h-100 flex justify-center items-center flex-col gap-3'>
                <div className='bg-gray-300 border border-3 p-8 rounded-3xl'>
                    {count}
                </div>

                <button onClick={startTimer} className='bg-gray-500 rounded-md p-1'>
                    Start Timer
                </button>

                <button onClick={stopTimer} className='bg-gray-500 rounded-md p-1'>
                    Stop Timer
                </button>

                <button onClick={reset} className='bg-gray-500 rounded-md p-1'>
                    Reset Timer
                </button>
            </div>
        </>
    )
}

export default Timers