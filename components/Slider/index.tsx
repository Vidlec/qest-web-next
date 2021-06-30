import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import numberOrNull from 'components/numberOrNull'
import { ArrowLabel, ArrowRightIcon, ArrowRightWrapper } from './styled'
import { useTranslation } from 'react-i18next'

function moveSlickToIndex(e: Event, sliderRef: Slider | null) {
	const indexAttr = (e.target as HTMLElement).getAttribute('data-sliderIndex')
	const index = numberOrNull(indexAttr)

	if (index !== null) {
		sliderRef?.slickPause()
		sliderRef?.slickGoTo(index)
	}
}
function resumeSlider(sliderRef: Slider | null) {
	sliderRef?.slickPlay()
}

type SliderOptions = {
	infinite: boolean
	speed: number
	slidesToShow: number
	slidesToScroll: number
	dots: boolean
	arrows: boolean
	autoplay: boolean
}

interface Props {
	sliderOptions: SliderOptions
	arrow: boolean
}

const SlickSlider: React.FC<Props> = ({ sliderOptions, arrow, children }) => {
	const [sliderRef, setSliderRef] = useState<Slider | null>(null)
	const [weAreDescriptionRef] = useState<HTMLParagraphElement | null>(null)

	useEffect(() => {
		const descriptionLinks =
			weAreDescriptionRef?.querySelectorAll('[data-sliderIndex]') ?? []

		for (const descriptionLink of descriptionLinks) {
			descriptionLink.addEventListener('mouseenter', (e) =>
				moveSlickToIndex(e, sliderRef)
			)
			descriptionLink.addEventListener('mouseleave', () =>
				resumeSlider(sliderRef)
			)
		}

		return () => {
			for (const descriptionLink of descriptionLinks) {
				descriptionLink.removeEventListener('mouseenter', (e) =>
					moveSlickToIndex(e, sliderRef)
				)
				descriptionLink.addEventListener('mouseleave', () =>
					resumeSlider(sliderRef)
				)
			}
		}
	}, [sliderRef, weAreDescriptionRef])

	const { t } = useTranslation()

	return (
		<>
			<Slider {...sliderOptions} ref={setSliderRef}>
				{children}
			</Slider>

			{arrow && (
				<ArrowRightWrapper onClick={() => sliderRef!.slickNext()}>
					<ArrowRightIcon
						src={t('about.arrow.url')}
						alt={t('about.arrow.alternativeText')}
					/>
					<ArrowLabel>{t('about.hqCTATitle')}</ArrowLabel>
				</ArrowRightWrapper>
			)}
		</>
	)
}

export default SlickSlider
