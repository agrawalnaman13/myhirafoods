export const showAlert = (alert, message, options = {}) => {
  alert?.removeAll();
  alert.show(message, options);
};

// showAlert(alert, data.message, { timeout: 2000 });
