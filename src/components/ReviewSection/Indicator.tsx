import React, { FC } from 'react'
import { Styled } from './styles';

type IndicatorProps = {
  indicator: number
}

const Indicator: FC<IndicatorProps> = ({ indicator }) => {


  return (
    <Styled.Indicator>
      <Styled.Dot selected={indicator === 0}/>
      <Styled.Dot selected={indicator === 1}/>
      <Styled.Dot selected={indicator === 2}/>
    </Styled.Indicator>
  )
}

export default Indicator
