import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';
import { PermissionService } from '../shared/permission.service';

@Directive({
  selector: '[needPermission]'
})
export class NeedPermissionDirective implements OnInit {
  @Input('needPermission') permission:string;

  constructor( private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private service: PermissionService) {

   }

   ngOnInit(): void {
    debugger;
    if (this.service.userHasPermission(this.permission)){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainer.clear();
    }
  }
}

// export class NeedPermissionDirective implements OnInit {
//   @Input('needPermission') permission:string;

//   constructor(private element: ElementRef, private service: PermissionService) { 
     
//   }
//   ngOnInit(): void {
//     debugger;
//     if (!this.service.userHasPermission(this.permission)){
//       this.element.nativeElement.style.display = 'none';
//     }
//   }
// }
