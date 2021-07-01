import { GetStaticProps } from 'next'
import HomePage from 'screens/HomePage'
import withTranslations from 'utils/next/withTranslations'

export default HomePage

export const getStaticProps: GetStaticProps = withTranslations()
