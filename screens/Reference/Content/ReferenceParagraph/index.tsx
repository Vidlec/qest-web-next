import React from 'react'
import { Paragraph, Item, ItemColor } from './styled'

interface Props {
    items: string[]
}

export const ReferenceParagraph: React.FC<Props> = ({ children, items }) => {
    const colors: ItemColor[] = ['red', 'yellow', 'pink', 'green', 'blue']
    return (
        <Paragraph>
            {children}
            {items.map((item, index) => {
                return(<Item key={item + index} color={colors[index % 5]}>{item}</Item>)
            })}
        </Paragraph>
	)
}
