import { toast } from 'react-toastify';
const showMessage = (type, message = '', options = {}) => {
  if (typeof message !== 'string' || !message.trim()) {
    return;
  }
  (toast[type] || toast)(message, {
    position: 'top-center',
    closeOnClick: true,
    pauseOnHover: true,
    autoClose: 5000,
    ...options, // To override default option
  });
};

export const showError = showMessage.bind(null, 'error');

export const showInfo = showMessage.bind(null, 'info');

export const showSuccess = showMessage.bind(null, 'success');

export const showWarning = showMessage.bind(null, 'warn');
