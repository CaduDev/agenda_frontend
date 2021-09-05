import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import api from '~/services/api';

export async function handlerExclude(path, id, user_id, field, refresh) {
  const options = {
    title: 'Excluir',
    message: `Você tem certeza que deseja excluir esse ${field}?`,
    buttons: [
      {
        label: 'Sim',
        onClick: async () => {
          try {
            await api.post(path, {
              id,
              user_id,
            });

            const { data: response } = await api.get('contact/1');

            refresh(response);

            toast.success(`Contato apagado com sucesso!`, {
              className: 'alert_success',
            });
          } catch (err) {
            toast.error(`Ocorreu um erro ao tentar apagar contato!`, {
              className: 'alert_error',
            });
          }
        },
      },
      {
        label: 'Cancelar',
      },
    ],
  };

  confirmAlert(options);
}
