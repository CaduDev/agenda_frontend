import styled from 'styled-components';

export const Container = styled.div`
    background: #9d81dd;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    background: #121214;
    width: 300px;
    height: 60%;
    border-radius: 8px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    outline: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;

    > span {
      text-transform: uppercase;
      color: #fff;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 26px;
      margin-bottom: 14%;
    }

    > form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      > input {
        width: 100%;
        border: none;
        padding: 12px;
        border-radius: 4px;
        font-size: 12px;
        box-sizing: border-box;
      }

      > input + input {
        margin-top: 12px;
      }

      > button {
        width: 100%;
        margin-top: 12px;
        border: none;
        padding: 12px;
        border-radius: 4px;
        font-size: 12px;
        background: transparent;
        color: #fff;
        background: #ffffff2b;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

        :active,
        :hover {
          background: #fff;
          color: #333;
          transition: all 0.2s;
          cursor: pointer;
        }

        &:active {
          box-shadow: none !important;
          transform: translateY(1px) !important;
          transition: all 0.15s ease;
        }
      }

      > a {
        margin-top: 30px;
        color: #fff;
        text-decoration: none;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      }
  }
`