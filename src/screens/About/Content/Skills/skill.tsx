import { SkillFragment } from 'gql/generated/types'
import React from 'react'
import { ColorText } from '../styled'
import { SkillDescription, SkillHeadline, SkillsListItem } from './styled'

interface Props {
  skill: SkillFragment
}

const AboutSkill: React.FC<Props> = ({ skill }) => {
  return (
    <>
      <SkillsListItem>
        <SkillHeadline>
          <ColorText colorHash={skill.titleColorHash}>{skill.title}</ColorText>
        </SkillHeadline>
        <SkillDescription>{skill.description}</SkillDescription>
      </SkillsListItem>
    </>
  )
}

export default AboutSkill
