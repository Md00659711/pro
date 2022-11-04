import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";
  data : any = localStorage.getItem("data");
  user : any = JSON.parse(this.data);
  name: any;
  mobile:any;
  // // parent_name : any= this.user.data.name;
  // parent_phone : any = this.user.data.mobile;
  // child_name : any = this.user.data.child.name;
  // child_phone : any = this.user.data.child.mobile;


  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService) {
    super();

  }
  ngOnInit(): void {
    if (this.user.data.child !== undefined) {
        this.name=this.user.data.child.name;
        this.mobile=this.user.data.child.mobile;
    }else{
        this.name=this.user.data.candidate;
        this.mobile=this.user.data.mobile;
    }

  }
}
