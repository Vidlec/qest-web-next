import React, { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({
	portalID,
	children,
}: {
	portalID: string
	children: React.ReactElement
}) => {
	const ref = useRef<Element | null>(null)
	const [mounted, setMounted] = useState(false)

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
