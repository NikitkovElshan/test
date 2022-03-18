import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SaveComponent} from "../save/save.component";
import { Subscription } from 'rxjs';
import { IItem } from 'src/app/interfaces/interfaces';




@Component({
  selector: 'app-news-id',
  templateUrl: './news-id.component.html',
  styleUrls: ['./news-id.component.scss']
})
export class NewsIdComponent implements OnInit {

  private routeSub: Subscription | undefined;

  constructor(private http: HttpClient,
              private router: Router,
              private dialog: MatDialog,
              private route: ActivatedRoute) { }

  data: IItem | any = null

  private DialogElementsExampleDialog: MatDialogRef<SaveComponent> | undefined;

  ngOnInit(): void {
    let id = null;
    this.routeSub = this.route.params.subscribe(params => {
      id = params['id']
    });
    this.http.get('http://jsonplaceholder.typicode.com/posts/'+id).subscribe(res=>{
      this.data = res
    },error =>{
      console.log(error);
    })

  }

  patch() {
    this.http.patch('http://jsonplaceholder.typicode.com/posts/'+this.data.id, this.data).subscribe(res=>{
      this.DialogElementsExampleDialog = this.dialog.open(SaveComponent, {});
        this.router.navigate(['/news'])
    },error =>{
      console.log(error);
    })



  }

}
