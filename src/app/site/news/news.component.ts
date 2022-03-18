import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AreYouSureDialogComponent} from "../are-you-sure-dialog/are-you-sure-dialog.component";
import {IItem} from "../../interfaces/interfaces";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() data: IItem | undefined;

  private dialogAreYouSure: MatDialogRef<AreYouSureDialogComponent> | undefined;

  constructor(public dialog: MatDialog,
              private http: HttpClient) { }

  ngOnInit(): void {
  }
  removeId(){
    this.dialogAreYouSure = this.dialog.open(AreYouSureDialogComponent, {});
    this.dialogAreYouSure.afterClosed().subscribe(res => {
      if(res){
        this.http.delete('http://jsonplaceholder.typicode.com/posts/' + this.data?.id).subscribe(res =>{
          console.log(res)
        },error => {
          console.log(error);})
      }
    })
  }
}
