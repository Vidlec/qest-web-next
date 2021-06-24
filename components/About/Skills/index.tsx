import React from 'react'
import AboutSkill from 'components/About/Skills/skill'
import { Skill } from 'gql/generated/types'
import { useTranslation } from 'react-i18next'
import {SkillsList} from 'components/About/styled'

const Skills = () => {
    const { t } = useTranslation()
    
    return (
        <>
            <p>{t('about.skillsDescription')}</p>

            <SkillsList>
                {t<string, Skill[]>('about.skills', {
                    returnObjects: true,
                }).map((skill) => (
                    <div key={skill.id}>
                        <AboutSkill skill={skill}/>
                    </div>
                ))}
            </SkillsList>
        </>
    )
}

export default Skills
