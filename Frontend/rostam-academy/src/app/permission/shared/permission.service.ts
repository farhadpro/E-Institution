import { Injectable } from '@angular/core';

@Injectable()
export class PermissionService {
  userPermissions = new Array<string>();
  constructor() { 
    //TODO: load this data from server
    // this.userPermissions.push('CreateCourseCategory');
    this.userPermissions.push('ViewCourseCategory');
    this.userPermissions.push('ModifyCourseCategory');
    // this.userPermissions.push('DeleteCourseCategory');
  }

  public userHasPermission(permission: string) : boolean  {
    return this.userPermissions.indexOf(permission) != -1;
  }
}
