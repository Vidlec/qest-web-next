import { useState, useEffect, useRef } from 'react'

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

const useScreenSize = (size: number): boolean => {
	const [isSize, setIsSize] = useState(false)

	useEffect(() => {
		setIsSize(size > window.innerWidth)
	}, [])

	useEffect(() => {
		function handleResize() {
			setIsSize(size > window.innerWidth)
		}

		const th = throttle(handleResize, 100)

		window.addEventListener('resize', th)

		return () => window.removeEventListener('resize', th)
	}, [])

	return isSize
}

export default useScreenSize
