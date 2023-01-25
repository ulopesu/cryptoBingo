import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  showValidationError(message: string) {
    Swal.fire({
      title: 'Erro na Validação dos Dados!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Fechar',
      background: '#111111',
      color: '#ffffff',
      confirmButtonColor: '#ff4500',
      backdrop: false
    });
  }

  showApiError(message: string) {
    Swal.fire({
      title: 'Comportamento inesperado!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Fechar',
      background: '#111111',
      color: '#ffffff',
      confirmButtonColor: '#ff4500',
      backdrop: false
    });
  }

  showMetaMaskError(message: string) {
    Swal.fire({
      title: 'MetaMask Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Fechar',
      background: '#111111',
      color: '#ffffff',
      confirmButtonColor: '#ff4500',
      backdrop: false
    });
  }

  showSuccess(message: string, enableReload: boolean = false) {
    Swal.fire({
      title: 'OK!',
      text: message,
      icon: 'success',
      confirmButtonText: 'Fechar',
      background: '#111111',
      color: '#ffffff',
      confirmButtonColor: '#ff4500',
      backdrop: false
    }).then(function(result) {
      // console.log(result);
      if (result.value && enableReload) {
        window.location.reload();
      }
    });
  }
}
