import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContatemeService } from '../../../services/contateme.service';

@Component({
  selector: 'app-contateme',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contateme.component.html',
  styleUrl: './contateme.component.css'
})
export class ContatemeComponent implements OnInit {
  contatoForm!: FormGroup;
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private testeService: ContatemeService) {
  }

  ngOnInit(): void {
    this.contatoForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      conteudo: new FormControl('', [Validators.required, Validators.minLength(7)])
    });
  }

  get name() {
    return this.contatoForm.get('name')!;
  }

  get email() {
    return this.contatoForm.get('email')!;
  }

  get conteudo() {
    return this.contatoForm.get("conteudo")!;
  }

  submitForm() {
    if (this.contatoForm.invalid) {
      return;
    }

    this.dialog.closeAll();
    this.snackBar.open("Mensagem enviada com sucesso!", "✖", {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }
}
