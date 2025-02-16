import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'modules/home/pages/home/home.component',
    renderMode: RenderMode.Prerender
  }
];
