import React, { useState } from 'react'
import { Team } from 'gql/generated/types'
import { useTranslation } from 'react-i18next'

// TODO: Přidat sekci: Náš team
const AboutTeam = () => {
	const { t } = useTranslation()

	const [teamSlider] = useState(
		t<string, Team[]>('about.teams', { returnObjects: true })
	)

	const [sliderOptions] = useState({
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: true,
	})

	return <>Video</>
}

export default AboutTeam