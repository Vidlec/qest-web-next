import React from 'react'
import { ValuesHeadline, ValuesWrapper } from './styled'
import { BrandValue } from 'gql/generated/types'
import { useTranslation } from 'react-i18next'

import AboutBrandValue from 'components/About/BrandValues/brandValue'

const BrandValues = () => {
	const { t } = useTranslation()

	return (
		<>
			<ValuesHeadline>{t('about.valuesHeadline')}</ValuesHeadline>

			<ValuesWrapper>
				{t<string, BrandValue[]>('about.brandValues', {
					returnObjects: true,
				}).map((value) => (
					<div key={value.id}>
						<AboutBrandValue value={value} />
					</div>
				))}
			</ValuesWrapper>
		</>
	)
}

export default BrandValues
