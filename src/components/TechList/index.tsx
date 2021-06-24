import { TechList } from 'gql/generated/types'
import React from 'react'
import { List, ListItem } from './styled'

type Props = {
    techList: TechList[]
}

const Technologies: React.FC<Props> = ({ techList }) => (
    <List>
        {techList.map((techListItem) => (
            <ListItem key={techListItem.id}>{techListItem.name}</ListItem>
        ))}
    </List>
)

export default Technologies
