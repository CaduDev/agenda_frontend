import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  z-index: 11;
  position: relative;
  width: 50%;
`;

export const Card = styled.div`
  width: 100%;
  /* height: 800px; */
  position: relative;
  background: #0f0c17;
  border-radius: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    height: 60px;

    > .content_title_modal {
      > span {
        font-size: 21px;
        font-weight: 600;
        color: #b1b1b1;
      }
    }

    > .content_button_close_modal {
      > button {
        background: transparent;
        border: none;
        transition: 0.2s;

        &:hover {
          opacity: 0.5;
        }

        &:active {
          box-shadow: none !important;
          transform: translateY(1px) !important;
          transition: all 0.15s ease;
        }
      }
    }
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #2b2b2b;
  padding: 0px 30px;

  > .primary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;

    > form {
      /* width: 50%; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 40px;
      flex-grow: 1;
      padding-left: 40px;

      > input {
        width: 100%;
        border: none;
        padding: 12px;
        border-radius: 4px;
        font-size: 12px;
        box-sizing: border-box;

        &:read-only {
          border-color: #fff;
          color: #fff;
        }
      }

      > input + input {
        margin-top: 12px;
      }

      > span {
        width: 100%;
        display: block;
        font-size: 12px;
        padding: 5px 7px;
        font-weight: 600;
        color: #ff7878;
      }

      > button {
        width: 100%;
        margin-top: 10px;
        padding: 11px 0px;
        background: #9d81dd;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-weight: 600;

        &:disabled {
          background: #7d7d7d;
        }

        &:active {
          box-shadow: none !important;
          transform: translateY(1px) !important;
          transition: all 0.15s ease;
        }
      }
    }
  }
`;

export const Items = styled.div`
  padding: 10px;
  padding-top: 30px;
  background: #2b2b2b;

  > .contentItems {
    background: #252525;
    padding: 10px;
    border-radius: 4px;

    > .not_contact_registred {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 71px;

      > h3 {
        color: #9d81dda8;
      }
    }

    > .header-contentItems {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      > h3 {
        color: #7d7d7d;
      }
    }

    > .body-contentItems {
      > div {
        padding: 10px;
        background: #2b2b2b;
        border-radius: 4px;
        display: flex;
        align-items: center;
        display: flex;
        justify-content: space-between;

        > div {
          display: flex;

          > .icon {
            display: flex;
          }

          > .value {
            margin-left: 10px;
            color: #b9b9b9;
          }
        }

        > button {
          background: #1b1b1b;
          border: none;
          padding: 4px 9px;
          display: flex;
          border-radius: 2px;

          &:active {
            box-shadow: none !important;
            transform: translateY(1px) !important;
            transition: all 0.15s ease;
          }
        }
      }

      > div + div {
        margin-top: 10px;
      }
    }

    > .cover {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #000000e8;
      z-index: 1;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    > form {
      /* width: 50%; */
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 40px;
      flex-grow: 1;
      position: relative;

      > input,
      select {
        width: 100%;
        border: none;
        padding: 12px;
        border-radius: 4px;
        font-size: 12px;
        box-sizing: border-box;
      }

      > input,
      select + input,
      select {
        margin-top: 12px;
      }

      > span {
        width: 100%;
        display: block;
        font-size: 12px;
        padding: 5px 7px;
        font-weight: 600;
        color: #ff7878;
      }

      > button {
        width: 100%;
        margin-top: 10px;
        padding: 11px 0px;
        background: #9d81dd;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-weight: 600;

        &:disabled {
          background: #7d7d7d;
        }

        &:active {
          box-shadow: none !important;
          transform: translateY(1px) !important;
          transition: all 0.15s ease;
        }
      }
    }
  }
`;

export const ButtonAddItems = styled.button`
  border-radius: 0.4285rem;
  line-height: 24px;
  padding: 0px 12px;
  background: ${props => (props.backgroud ? props.backgroud : '#523b8c')};
  color: #ccc;
  border: none;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  outline: none !important;
  z-index: 1;
  margin-left: ${props => (props.margin ? `${props.margin}px` : '0px')};
  display: flex;
  padding-top: 2px;

  &:active {
    box-shadow: none !important;
    transform: translateY(1px) !important;
    transition: all 0.15s ease;
  }
`;
