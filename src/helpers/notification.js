import Swal from 'sweetalert2';

export const toastSuccess = (message) => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: message,
    showConfirmButton: true,
    timer: 3000,
    color: 'var(--color-black)',
    background: 'var(--color-white)',
    iconColor: 'green',
    confirmButtonColor: 'var(--color-red)',
    width: 320,
  });
};

export const toastError = (message) => {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: message,
    showConfirmButton: true,
    timer: 3000,
    color: 'var(--color-black)',
    background: 'var(--color-white)',
    iconColor: 'var(--color-red)',
    confirmButtonColor: '#var(--color-red)',
  });
};
