import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private emailList: string[] = [];

  submitContactRequest(email: string): Observable<any> {
    this.emailList.push(email);
    localStorage.setItem('emails', JSON.stringify(this.emailList)); // Salva no localStorage
    return of({
      success: true,
      message: 'E-mail salvo com sucesso!',
    });
  }

  getEmails(): string[] {
    return JSON.parse(localStorage.getItem('emails') || '[]');
  }
}
