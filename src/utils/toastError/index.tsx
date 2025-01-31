import { toast } from 'react-toastify';
import { i18n } from '../../translate/i18n';

type ApiError = {
  response?: {
    data?: {
      message?: string;
      error?: string;
    };
  };
  message?: string;
};

export default function toastError(err: ApiError) {
  const data = err.response?.data;
  const errorMsg = data?.message || data?.error;

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
    toast.error(err.message || 'An unexpected error occurred.');
  }
}
