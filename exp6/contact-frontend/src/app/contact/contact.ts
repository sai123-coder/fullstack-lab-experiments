import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html'
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('http://localhost:5000/api/contact', this.formData)
      .subscribe({
        next: () => {
          alert('Message Sent ✅');
          this.formData = { name: '', email: '', message: '' };
        },
        error: () => alert('Error sending ❌')
      });
  }
}