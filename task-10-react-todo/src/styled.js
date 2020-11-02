import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 15px;
  padding: 10px;
  background: #fff;
  border-radius: 4px;

  @media (min-width: 600px) {
    margin: 15px auto;
  }
`

export const TextInput = styled.input`
  border: 1px solid #ddd;
  width: 100%;
  display: block;
  padding: 10px 15px;
  border-radius: 4px;
  margin-right: ${props => (props['mr'] ? '10px' : 0)};
  margin-bottom: ${props => (props['mb'] ? '10px' : 0)};
  background: #f7f7f7;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  margin-right: ${props => (props['mr'] ? '10px' : 0)};
`

export const TaskBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px 10px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  margin-bottom: ${props => (props['mb'] ? '10px' : 0)};
`

export const Button = styled.button`
  background: #68d391;
  border: 0;
  border-radius: 4px;
  color: #f0fff4;
  padding: 5px 10px;
  margin-right: ${props => (props['mr'] ? '10px' : 0)};
  margin-left: ${props => (props['ml-auto'] ? 'auto' : '')};
  background: ${props => (props.gray ? 'gray' : props.red ? 'red' : '')};
  cursor: pointer;
`

export const Checkbox = styled.input``
