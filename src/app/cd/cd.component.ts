import { Component, Input, OnInit } from '@angular/core';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CDComponent implements OnInit {
  @Input() Cd!: CD;
  theCd!: CD;
  idcd!: string;

  constructor(private cdservice: CdsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idcd = this.route.snapshot.params['id'];
    if(this.idcd !== undefined){
      this.cdservice.getCDById(+this.idcd).subscribe(cd => {this.theCd = cd});
    }
    else {
      this.theCd = this.Cd;
    }
  }

  onAddCD() {
    this.Cd.quantite += 1;
  }

  onDelCD(){
    this.Cd.quantite -= 1;
    
  }

}
