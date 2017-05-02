import { EmployeeServcies } from './../../services/services';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    
})
export class homeComponent {
      public EmployeeList = [];
    public constructor(private empService: EmployeeServcies) {
        this.empService.getEmployeeList()
            .subscribe(
            (data: Response) => (this.EmployeeList = data.json())
            );

    }
}
