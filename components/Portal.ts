import React, { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface Props {
	portalID: string
}

const Portal: React.FC<Props> = ({ portalID, children }) => {
	const ref = useRef<Element | null>(null)
	const [_mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document?.createElement('div')
		const portalRoot = document?.getElementById(portalID)
		portalRoot?.appendChild(ref.current)
		setMounted(true)

		return () => {
			ref.current ? portalRoot?.removeChild(ref.current) : null
		}
	}, [portalID])

	return ref.current ? createPortal(children, ref.current) : null
}

export default Portal
