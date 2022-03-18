import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IItem} from "../../interfaces/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  data: IItem[] = []

  filteredData: IItem[] = []

  value: string = ''


  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.http.get<IItem[]>('http://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.data = [...res]
      this.filterData()
    }, error => {
      console.log(error);
    })


    if (localStorage.getItem('auth-token') == 'true') {
      this.router.navigate(['/news'])
    } else {
      this.router.navigate(['/login'])
    }
  }

  filterData(){
    if(!this.value)
      this.filteredData = [...this.data]
    else
      this.filteredData = this.data.filter(item=> item.userId === +this.value)
  }

  searchId() {
    this.filterData()
  }

}
