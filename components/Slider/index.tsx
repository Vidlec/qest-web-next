import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import {UploadFile} from '../../gql/generated/types'
import {CarouselPicture} from 'components/About/styled'
import numberOrNull from 'components/numberOrNull'

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
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    dots: boolean,
    arrows: boolean,
    autoplay: boolean,
}

interface Props {
    sliderOptions: SliderOptions,
    data: UploadFile[]
}

const SlickSlider: React.FC<Props> = ({ sliderOptions, data }) => {
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

    return (
        <>
            <Slider {...sliderOptions} ref={setSliderRef} >
                {data.map((image) =>
                    <CarouselPicture key={image.id}>
                        <img
                            src={image.url}
                            alt={image.alternativeText ?? ''}
                        />
                    </CarouselPicture>
                )}
            </Slider>
        </>
    )
}

export default SlickSlider