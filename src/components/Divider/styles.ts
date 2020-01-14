import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
`;
export const Context = styled.View`
  flex-direction: row;
  align-items: center;
  color: #FFF;
`;

export const Line = styled.View`
  flex: 1;
  height: 0.5px;
  opacity: 0.3;
  background-color: #000;
`;

export const Text = styled.Text.attrs({
    style: {
        marginHorizontal: 10
    }
})`
    align-self:center;
`;
