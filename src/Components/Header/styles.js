import styled from 'styled-components';

export const Container = styled.div`
  background: #9d81dd;
  height: 60px;
  width: 100%;
  padding: 20px 14px;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Button = styled.button`
  border-radius: 0.4285rem;
  line-height: 24px;
  padding: 0px 12px;
  background: ${props => (props.backgroud ? props.backgroud : '#523b8c')};
  color: #ccc;
  border: none;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  outline: none !important;
  z-index: 2;
  margin-left: ${props => (props.margin ? `${props.margin}px` : '0px')};

  &:active {
    box-shadow: none !important;
    transform: translateY(1px) !important;
    transition: all 0.15s ease;
  }
`