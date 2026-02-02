import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  /* -------- STATIC ROUTES (PRERENDER) -------- */
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'services',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'in-box-desiccants',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'in-box-desiccants/incubic',
    renderMode: RenderMode.Prerender,
  },

  /* -------- DYNAMIC ROUTES (CLIENT ONLY) -------- */
  {
    path: 'in-box-desiccants/incubic/:category',
    renderMode: RenderMode.Client,
  },
  {
    path: 'in-box-desiccants/incubic/:category/:product',
    renderMode: RenderMode.Client,
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Client,
  },

  /* -------- FALLBACK -------- */
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }

];
