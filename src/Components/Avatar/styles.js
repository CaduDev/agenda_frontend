import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ContentAvatar = styled.div`
  display: flex;
  z-index: 1;
  /* border: 6px solid #262525; */
  width: 171px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;

  img {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    width: 100%;
    display: flex;
    border-radius: 50%;
    background: #262525;
    padding: 6px;
  }

  .overlay {
    opacity: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 38%;
    background: #000000c4;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;

    &:hover {
      opacity: 1;
    }
    > button {
      background: transparent;
      border: none;
      width: 80%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;

      > span {
        display: block;
        color: #fff;
        opacity: 0.9;
        font-weight: 600;
        margin-right: 8px;
        font-size: 12px;
      }

      &:active {
        box-shadow: none !important;
        transform: translateY(1px) !important;
        transition: all 0.15s ease;
      }
    }
  }

  &:hover > .overlay {
    opacity: 1;

    > button {
      > svg {
        opacity: 0.9;
        transition: top 0.13s ease-out;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: scale(0.75);
      }
    }
  }
`;

export const ModalEditerAvatar = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const ContentEditerAvatar = styled.div`
  display: flex;
  flex-direction: column;
  width: 680px;
  height: ${props => (props.height ? `${props.height}px` : `500px`)};
  background: #262525;
  display: flex;

  canvas {
    margin: 0px;
  }

  > .header {
    background-color: #f5f6f7;
    border-bottom: 1px solid #e5e5e5;
    border-radius: 3px 3px 0 0;
    color: #1d2129;
    font-weight: bold;
    line-height: 19px;
    padding: 10px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      color: #1d2129;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      background: transparent;
      border: none;

      &:active {
        box-shadow: none !important;
        transform: translateY(1px) !important;
        transition: all 0.15s ease;
      }
    }
  }

  > .textarea {
    width: 100%;
    padding: 12px;
    background: #fff;
    display: flex;

    > textarea {
      flex-grow: 1;
      resize: none;
      max-height: 60px;
      border: none;
    }

    .container_emojin {
      position: relative;

      > button {
        width: 30px;
        height: 30px;
        border: none;
        background: #fff;
        color: #a0a0a0;

        &:active {
          box-shadow: none !important;
          transform: translateY(1px) !important;
          transition: all 0.15s ease;
        }
      }
    }
  }

  > .editar {
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    border-radius: 0.4285rem;
    line-height: 24px;
    background: #464646;
    ${'' /* background: #fff; */}
    color: #ccc;
    border: none;
    padding: 0px 12px;
    bottom: 140px;

    &:active {
      box-shadow: none !important;
      bottom: 139px;
      transition: all 0.15s ease;
    }
  }

  .editor {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    flex-grow: 1;

    > canvas {
      background: rgb(221, 221, 221);
    }
  }

  > .footer {
    display: flex;
    background-color: #f5f6f7;
    border-bottom: 1px solid #e5e5e5;

    > div {
      flex-grow: 1;
    }

    > .left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 17%;

      button + button {
        margin-left: 6px;
      }

      button {
        border-radius: 0.4285rem;
        padding: 10px;
        background: #464646;
        color: #ccc;
        border: none;
        flex-grow: 1;
        max-width: 40px;
        display: flex;
        justify-content: center;

        &:active {
          box-shadow: none !important;
          transform: translateY(1px) !important;
          transition: all 0.15s ease;
        }
      }
    }

    .center {
      flex-grow: 1;
      display: flex;
      align-items: center;
      width: 40%;

      .div_slide {
        width: 100%;
        padding: 0px 12px;
        .slider {
          -webkit-appearance: none;
          width: 100%;
          height: 7px;
          background: #111111;
          outline: none;
          opacity: 0.7;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;
          margin: 15px 0px;
        }
        .slider:hover {
          opacity: 1;
        }
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #7159c1;
          cursor: pointer;
          border-radius: 50%;
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #7159c1;
          cursor: pointer;
          border-radius: 50%;
        }
        .slider::-webkit-slider-thumb:hover {
          width: 25px;
          height: 25px;
          transition: 0.4s;
        }
        .slider::-moz-range-thumb:hover {
          width: 25px;
          height: 25px;
          transition: 0.4s;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 17%;

      button + button {
        margin-left: 6px;
      }

      button {
        border-radius: 0.4285rem;
        line-height: 24px;
        padding: 0px 12px;
        background: #464646;
        color: #ccc;
        border: none;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        outline: none !important;

        &:active {
          box-shadow: none !important;
          transform: translateY(1px) !important;
          transition: all 0.15s ease;
        }
      }
    }
  }
`;

export const OptionEditAvatar = styled.div`
  padding: 30px;
  flex-grow: 1;
  position: relative;
`;

export const Action = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px 0px;
  display: flex;
  justify-content: center;

  button {
    border-radius: 0.4285rem;
    line-height: 24px;
    width: 90px;
    background: #464646;
    color: #ccc;
    border: none;

    &:active {
      box-shadow: none !important;
      transform: translateY(1px) !important;
      transition: all 0.15s ease;
    }
  }

  button:nth-child(2) {
    margin-left: 15px;
  }
`;
