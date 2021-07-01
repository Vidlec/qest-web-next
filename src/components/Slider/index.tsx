import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { ArrowLabel, ArrowRightIcon, ArrowRightWrapper } from './styled'
import { useTranslation } from 'react-i18next'

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
