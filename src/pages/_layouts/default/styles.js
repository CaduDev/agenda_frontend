import styled from 'styled-components';

import scrollbar from 'react-perfect-scrollbar';

export const Wrapper = styled.div`
  /* background: linear-gradient(-90deg, #7159c1, #ab59c1); */
  background: #252525;
  /* background: #9d81dd; */
  height: 100%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const Component = styled(scrollbar)`
  > .center {
    
  }
`
