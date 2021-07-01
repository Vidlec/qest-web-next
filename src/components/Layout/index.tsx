import * as React from 'react'
import { CSSProperties } from 'styled-components'

type Props = {
  gap?: number
  style?: CSSProperties
} & CSSProperties

type LayoutType = 'rows' | 'columns'
type FlexDirection = 'row' | 'column'

const marginPropertyMap: Record<LayoutType, keyof CSSProperties> = {
  columns: 'marginRight',
  rows: 'marginBottom',
}

const flexDirectionMap: Record<LayoutType, FlexDirection> = {
  columns: 'row',
  rows: 'column',
}

const createLayout = (type: LayoutType): React.FC<Props> => {
  const Layout: React.FC<Props> = ({ children, gap = 0, style, ...directStyles }) => {
    const currenStyle = style ?? directStyles

    const gapSize = gap

    const marginProperty = marginPropertyMap[type]
    const flexDirection = flexDirectionMap[type]

    const viewStyle: CSSProperties = { flexDirection, display: 'flex', ...currenStyle }

    if (Array.isArray(children)) {
      return (
        <div style={viewStyle}>
          {children.filter(React.isValidElement).map((child, index) => {
            const isLast = index === children.length - 1

            return (
              <div style={{ [marginProperty]: isLast ? 0 : gapSize }} key={index}>
                {child}
              </div>
            )
          })}
        </div>
      )
    }

    return <div style={viewStyle}>{children}</div>
  }

  return Layout
}

export const Rows = createLayout('rows')
export const Columns = createLayout('columns')
