import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  pageId = input.required<string>(); // This would work if the routes are setup with component input binding
  limit = input.required<number>(); // in the url, e.g. /pages/1?limit=10
  page = input.required<{
    id: string;
    title: string;
    content: string;
  }>();
}
