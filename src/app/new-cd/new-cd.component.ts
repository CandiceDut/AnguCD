import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cd',
  standalone: false,
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})

export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD!: CD;

  constructor(private cdservice: CdsService, private formBuilder: FormBuilder, private router : Router) {}

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
    let newCd: CD = {
      id: 0,
      title: this.formulaire.get('title')?.value,
      author: this.formulaire.get('author')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value,
      price: this.formulaire.get('price')?.value,
      onsale: false
    };

    this.cdservice.addCD(newCd).subscribe({
      next : cd =>
      {
        this.router.navigateByUrl('/catalog')
      },
      error : err =>
      {
        console.error('Observable ajout CD a émis une erreur : ' + err);
        alert ("Désolé le CD n'a pas pu être ajouté");
      }
    })    
  }

}
