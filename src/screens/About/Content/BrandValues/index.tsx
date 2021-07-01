import { BrandValueFragment } from 'gql/generated/types'
import { useTranslation } from 'next-i18next'
import React from 'react'
import AboutBrandValue from '../BrandValues/brandValue'
import { ValuesHeadline, ValuesWrapper } from './styled'

interface Props {
  brandValues: BrandValueFragment[]
}
const BrandValues: React.FC<Props> = ({ brandValues }) => {
  const { t } = useTranslation()

  return (
    <>
      <ValuesHeadline>{t('about.valuesHeadline')}</ValuesHeadline>

      <ValuesWrapper>
        {brandValues.map((value) => (
          <div key={value.id}>
            <AboutBrandValue value={value} />
          </div>
        ))}
      </ValuesWrapper>
    </>
  )
}

export default BrandValues
