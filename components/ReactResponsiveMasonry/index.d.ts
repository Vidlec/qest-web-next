declare module 'react-responsive-masonry' {
	import { FC } from 'react'

	export const ResponsiveMasonry: FC<{
		columnsCountBreakPoints?: Record<number, number>
	}>

	const Masonry: FC<{
		columnsCount?: number
		gutter?: number
	}>

	export default Masonry
}
