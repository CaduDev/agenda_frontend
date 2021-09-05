import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/modules/auth/actions';
import { clearContactDetails } from '../../store/modules/detailsContact/actions';
import history from '../../services/history';
import { Container, Content, Button } from './styles';

function Header() {
  const dispatch = useDispatch();
  const detailsContact = useSelector(
    state => state.detailsContact.detailsContact
  );

  const { pathname } = history.location;

  const rota = pathname.split('/');

  return (
    <Container>
      <Content>
        <div>
          {rota[1] === 'contact' && (
            <Button
              onClick={() => {
                dispatch(clearContactDetails());
                history.goBack();
              }}
            >
              Voltar
            </Button>
          )}
        </div>
        <Button onClick={() => dispatch(userLogout())}>Sair</Button>
      </Content>
    </Container>
  );
}

export default Header;
