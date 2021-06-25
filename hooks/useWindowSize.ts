import { useState, useEffect } from 'react'

function throttle(func: Function, duration: number) {
	let shouldWait = false
	return function (...args: unknown[]) {
		if (!shouldWait) {
			func(...args)
			shouldWait = true
			setTimeout(function () {
				shouldWait = false
			}, duration)
		}
	}
}

const useWindowSize = (size: number, throttleTime: number): boolean => {
	const [isSize, setIsSize] = useState(false)

	useEffect(() => {
		setIsSize(size > window.innerWidth)
	}, [])

	useEffect(() => {
		function handleResize() {
			setIsSize(size > window.innerWidth)
		}

		const throttledFunction = throttle(handleResize, throttleTime)

		window.addEventListener('resize', throttledFunction)

		return () => window.removeEventListener('resize', throttledFunction)
	}, [])

	return isSize
}

export default useWindowSize
