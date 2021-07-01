import { GetStaticProps } from 'next'
import Contacts from 'screens/Contacts'
import withTranslations from 'utils/next/withTranslations'

export default Contacts

export const getStaticProps: GetStaticProps = withTranslations({
  ns: ['contacts'],
})
