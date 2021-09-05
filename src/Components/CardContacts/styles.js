import styled from 'styled-components';

export const Container = styled.div`
  background: #967ad9;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: row;
  overflow: hidden;

  > div:nth-child(1) {
    height: 100%;

    img {
      height: 100%;
    }
  }

  > .info {
      display: flex;
      justify-content: center;
      padding: 0px 20px;
      flex-direction: column;
      justify-content: space-around;
      flex-grow: 1;

    > .title {
      font-size: 24px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      flex-direction: row;

      > span {
        cursor: pointer;
      }
    }

    > .type {
      font-size: 18px;
      color: #543898;
      font-weight: 800;
      flex-direction: row;
      display: flex;

      > div {
        display: flex;
        align-items: center;
        width: 100%;

        > div {
          margin-left: 10px;
        }
      }
    }
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    border: none;
    border-radius: 0.4285rem;
    background: #523b8c;
    width: 30px;
    height: 30px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
      box-shadow: none !important;
      transform: translateY(1px) !important;
      transition: all 0.15s ease;
    }
  }

  > button + button {
    margin-left: 10px;
  }
`;