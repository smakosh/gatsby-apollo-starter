import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem 0;

  h4 {
    color: #2462b4;
    font-size: 12pt;
    margin: unset;
  }

  p.description {
    line-height: 1.6;
    color: #777;
    margin-bottom: 4rem;
  }

  @media (max-width: 960px) {
    text-align: center;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Item = styled.div`
  width: 100%;
  max-width: 30%;
  display: flex;
`

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0px 8px 24px #c9d0dc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.div`
  padding: 2rem 1rem;
`

export const Video = styled.div`
  padding: unset;
`
