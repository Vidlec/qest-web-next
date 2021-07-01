import { SkillFragment } from 'gql/generated/types'
import { useTranslation } from 'next-i18next'
import React from 'react'
import AboutSkill from './skill'
import { SkillDescription, SkillsList } from './styled'

interface Props {
  skills: SkillFragment[]
}

const Skills: React.FC<Props> = ({ skills }) => {
  const { t } = useTranslation()

  return (
    <>
      <SkillDescription>{t('about.skillsDescription')}</SkillDescription>
      <SkillsList>
        {skills.map((skill) => (
          <div key={skill.id}>
            <AboutSkill skill={skill} />
          </div>
        ))}
      </SkillsList>
    </>
  )
}

export default Skills
