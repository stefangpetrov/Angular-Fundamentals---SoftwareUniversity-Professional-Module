import { Component, OnInit } from '@angular/core';
import {CreateFurnitureModel} from '../models/create-furniture.model';
import {CustomFormsModule} from 'ng2-validation';
import {FurnitureService} from '../furniture.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {

  bindingModel: CreateFurnitureModel;
  constructor(private furnitureService: FurnitureService) {
    this.bindingModel = new CreateFurnitureModel('', '', 0, '', 1, '');
  }

  ngOnInit() {
  }

  create() {
    this.furnitureService.createFurniture(this.bindingModel).subscribe();
  }

}
