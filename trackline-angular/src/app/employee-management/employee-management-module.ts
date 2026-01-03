import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees';
import { ProfileManagementComponent } from './profile-management/profile-management';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
    data: { title: 'Employees' },
  },
  {
    path: 'profile/:id',
    component: ProfileManagementComponent,
    data: { title: 'User Profile' },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class EmployeeManagementModule {}
