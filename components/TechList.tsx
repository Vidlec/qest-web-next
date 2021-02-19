import React from "react"
import styled from "styled-components"

// this interface defines the shape of the data returned by the jobs query.
export interface ITechList {
  id: string;
  name: string;
}

interface IProps {
  techList: ITechList[];
}

const List = styled.ul``
const ListItem = styled.li`
  margin-bottom: .5rem;
`

const TechList = ({ techList }: IProps) => {
  const listItems = techList.map((techListItem) => {
    return (
      <ListItem key={techListItem.id}>
        {techListItem.name}
      </ListItem>
    )
  })

  return (
    <List>
      {listItems}
    </List>
  )
}

export default TechList