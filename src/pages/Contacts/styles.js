import styled from 'styled-components';

import scrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;

  > .list-contacts {
    height: 100%;
    background-color: #131313;
    border-radius: 8px;
    width: 65%;
    padding: 50px;
    height: 500px;
    padding-top: 10px;

    .not_contact_registred {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > h2 {
        color: #9d81dda8;
      }
    }
  }
`;

export const CardProfile = styled.div`
  background-color: #131313;
  position: relative;
  width: 30%;
  height: 500px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding-top: 50px;
  flex-direction: column;
  margin-right: 5%;

  > .info-user {
    flex-direction: column;
    display: flex;
    padding: 0px 20px;
    margin-top: 20px;

    > span {
        color: #8a8a8a;
        font-size: 18px;
      }
    }
  }

  > div.containerButtonCreateContact {
      display: flex;
      flex-grow: 1;
      align-items: flex-end;
      padding-bottom: 50px;

      > a {
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
      }
  }
`;

export const ScrollContainer = styled(scrollbar)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  > .center {
    width: 100%;
    display: flex;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 10px;

    > div + div {
      margin-top: 20px;
    }
  }
`;

export const Scroll = styled(scrollbar)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 30px;
  left: 0;

  > .center {
    width: 100%;
    display: flex;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 10px;

    > div + div {
      margin-top: 20px;
    }
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    width: 96%;
    border: none;
    padding: 12px;
    border-radius: 4px;
    background: transparent;
    transition: 0.2s;

    &:focus {
      background: #ffffff14;
    }
  }
`;
