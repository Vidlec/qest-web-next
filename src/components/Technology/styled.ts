import styled from 'styled-components'

export const Wrapper = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}%`};
`

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.caseStudyComplementaryColor};
`

export const Article = styled.article`
  background-color: ${({ theme }) => theme.colors.technologiesBackground};
  padding: 3rem 2.5rem;
`

export const TopContent = styled.p`
  font-size: 1.3rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.mainFont};
`

export const BottomContent = styled.p`
  font-size: 1.7rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.caseStudyComplementaryColor};
`
