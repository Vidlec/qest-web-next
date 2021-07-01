import React from 'react'
import { Skill } from 'gql/generated/types'
import {ColorText, SkillDescription, SkillHeadline, SkillsListItem} from 'components/About/styled'

interface Props {
    skill: Skill
}

const AboutSkill: React.FC<Props> = ({ skill }) => {
    return (
        <>
            <SkillsListItem>
                <SkillHeadline>
                    <ColorText
                        colorHash={skill.titleColorHash}
                    >
                        {skill.title}
                    </ColorText>
                </SkillHeadline>
                <SkillDescription>
                    {skill.description}
                </SkillDescription>
            </SkillsListItem>
        </>
    )
}


export default AboutSkill
