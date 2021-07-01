import styled from 'styled-components'

export type GetPositions =
  | 'topLeft'
  | 'topMiddle'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomMiddle'
  | 'bottomRight'

const getPositioning = (position: GetPositions): string => {
  const positionMap: Record<GetPositions, string> = {
    topLeft: 'top: 0; left: 0;',
    topMiddle: 'top: 0; left: 50%; margin-left: -128px; text-align: center;',
    topRight: 'top: 0; right: 0; text-align: right;',
    bottomLeft: 'bottom: 0; left: 0;',
    bottomMiddle: 'bottom: 0; left: 50%; margin-left: -128px; text-align: center;',
    bottomRight: 'bottom: 0; right: 0; text-align: right;',
  }

  return positionMap[position]
}

export const Item = styled.span<{ position: GetPositions }>`
  position: absolute;
  width: 256px;
  padding: 3.75rem 2.5rem;
  z-index: 5;

  ${({ position }) => getPositioning(position)};
`
