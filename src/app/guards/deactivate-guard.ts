import { CanDeactivateFn } from '@angular/router';

export const deactivateGuard: CanDeactivateFn<any> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};