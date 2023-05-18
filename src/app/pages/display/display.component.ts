import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { UserdataService } from '../../services/userdata.service';
import { tap } from 'rxjs';
import { User } from 'src/app/user';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserdataService){
}
    ngOnInit(){
      this.userService.findAll().subscribe(data=>{
          this.users=data;
      });
    }
  

 

  // data: any;

  // constructor(private dataService: UserdataService) {}

  //   ngOnInit(){
  //     this.data = this.dataService.getData();
  //     };

    }




