/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FaRedo, FaUndo, FaRegImage, FaTimes, FaCamera } from 'react-icons/fa';

import PropTypes from 'prop-types';

import AvatarEditor from 'react-avatar-editor';

import { toast } from 'react-toastify';

import {
  Container,
  ContentAvatar,
  ModalEditerAvatar,
  ContentEditerAvatar,
} from './styles';

// eslint-disable-next-line no-unused-vars
import { defaultAvatar } from '../../assets';

export default function Avatar({ edit, setImageContact, url }) {
  const [show, setShow] = useState(false);

  const [scale, setScale] = useState(1.2);

  const [rotate, setRotate] = useState(0);

  const [image, setImage] = useState('');

  const [base64, setBase64] = useState('');

  const [height, setHeight] = useState(0);

  const setEditorRef = useRef();

  useEffect(() => {
    setHeight(window.innerHeight - 300);
  }, []);

  useEffect(() => {
    if (url) {
      setBase64(url);
    }
  }, [url]);

  function openFolder() {
    const inputFile = document.getElementById('folder');
    inputFile.click();
  }

  function handlerFile(event) {
    const file = URL.createObjectURL(event.target.files[0]);

    setShow(true);

    setImage(file);

    document.getElementById('folder').value = '';
  }

  async function onClickSave() {
    try {
      const canvasScaled = setEditorRef.current.getImageScaledToCanvas();

      const base64generate = canvasScaled.toDataURL();

      setBase64(base64generate);
      setImageContact(base64generate);

      return setShow(false);
    } catch (err) {
      return toast.error('Error!', { className: 'alert_error' });
    }
  }

  return (
    <Container>
      {show ? (
        <ModalEditerAvatar>
          <ContentEditerAvatar height={height}>
            <div className="header">
              <h3>Criar avatar</h3>
              <button type="button" onClick={() => setShow(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="editor">
              <AvatarEditor
                image={image}
                ref={setEditorRef}
                width={250}
                height={250}
                border={50}
                color={[255, 255, 255, 0.6]}
                scale={scale}
                rotate={rotate}
                crossOrigin="Anonymous"
                borderRadius={250}
                disableHiDPIScaling
              />
            </div>
            <div className="footer">
              <div className="left">
                <button type="button" onClick={() => setRotate(rotate - 90)}>
                  <FaUndo />
                </button>
                <button type="button" onClick={() => setRotate(rotate + 90)}>
                  <FaRedo />
                </button>
              </div>
              <div className="center">
                <FaRegImage
                  size="20"
                  color={scale === '1' ? '#c3c2c7' : '#7159c1'}
                />
                <div className="div_slide">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    onChange={e => setScale(e.target.value)}
                    step="0.01"
                    value={scale}
                    className="slider"
                  />
                </div>

                <FaRegImage
                  size="30"
                  color={scale === '10' ? '#c3c2c7' : '#7159c1'}
                />
              </div>
              <div className="right">
                <button type="button" onClick={() => onClickSave()}>
                  Salvar
                </button>
                <button type="button" onClick={() => setShow(false)}>
                  Cancelar
                </button>
              </div>
            </div>
          </ContentEditerAvatar>
        </ModalEditerAvatar>
      ) : null}

      <ContentAvatar>
        <div>
          <img src={base64 || defaultAvatar} alt="avatar user" />
        </div>
        {edit ? (
          <>
            <div className="overlay">
              <button
                type="button"
                onClick={() => (edit ? openFolder() : false)}
              >
                <span>Alterar</span> <FaCamera color="#fff" size={20} />
              </button>
            </div>
            <input
              id="folder"
              style={{ display: 'none' }}
              type="file"
              accept="image/*"
              onChange={e => handlerFile(e)}
              capture
            />
          </>
        ) : null}
      </ContentAvatar>
    </Container>
  );
}

Avatar.propTypes = {
  edit: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  photo: PropTypes.string,
};

Avatar.defaultProps = {
  edit: false,
  photo: '',
};
