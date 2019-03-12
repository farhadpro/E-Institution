import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionService } from './shared/permission.service';
import { NeedPermissionDirective } from './need-permission/need-permission.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PermissionService
  ],
  declarations: [
    NeedPermissionDirective
  ],
  exports: [ 
    NeedPermissionDirective
   ]
})
export class PermissionModule { }
