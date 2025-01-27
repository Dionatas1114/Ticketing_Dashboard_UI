import { toast } from 'react-toastify';

import { i18n } from '../../translate/i18n';

export default function toastError(err: any) {
  const errorMsg = err.response?.data?.error;

  if (errorMsg) {
    if (i18n.exists(`backendErrors.${errorMsg}`)) {
      toast.error(i18n.t(`backendErrors.${errorMsg}`), {
        toastId: errorMsg,
      });
    } else {
      toast.error(errorMsg, {
        toastId: errorMsg,
      });
    }
  } else {
    toast.error(err.message);
  }
}
