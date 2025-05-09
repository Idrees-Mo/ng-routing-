import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

export const pageResolver: ResolveFn<Object> = (route, state) => {
  const pageId = route.paramMap.get('pageId');
  return of({
    pageId: pageId,
    title: 'Page Home',
    content: 'Page Content',
  });
};
