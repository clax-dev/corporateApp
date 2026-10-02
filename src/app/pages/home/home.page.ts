import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToolbar} from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSegmentButton, IonLabel, IonSegment, RouterLink]
})
export class HomePage  {

  constructor() { }



}
