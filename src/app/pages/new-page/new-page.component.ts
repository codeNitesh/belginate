import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service' 
@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  userDetails: any

  toppingSelected: string = ""

  city: string

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  isAllSelected: boolean = false

  data: any = {
    mainData: [
      {listName: "Reasons", value: "1000", desc: "abc", isSelected: false,},
      {listName: "2Reasons", value: "51000", desc: "kabc", isSelected: true,},
      {listName: "3Reasons", value: "61000", desc: "yabc", isSelected: false,},
      {listName: "4Reasons", value: "71000", desc: "wabc", isSelected: false,},
    ] 
  }
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.callAPI().subscribe(
      (res)=> this.userDetails = res,
      (err)=> console.log("error in api")
    )
  }

  selectAllExp(){
    for(var i=0; i<this.data.mainData.length; i++){
      this.data.mainData[i].isSelected = !this.isAllSelected
    }
  }
}
