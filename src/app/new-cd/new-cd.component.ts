import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CD } from '../models/cd.model';

@Component({
  selector: 'app-new-cd',
  standalone: false,
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})

export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD!: CD;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      title: [null,[Validators.required, Validators.minLength(6)]],
      author: [null,[Validators.required, Validators.minLength(6)]],
      thumbnail: [null,[Validators.required]],
      dateDeSortie: [null,[Validators.required, Validators.min(0)]],
      quantite: [null,[Validators.required, Validators.min(0)]],
      price: [null,[Validators.required, Validators.min(0)]],
    },
    {updateOn: 'blur'}
  );
    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD = {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite,
        price: formValue.price,
        onsale: false
      };
    });
  }

  ajout(){
    
  }
}
