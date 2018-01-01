/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import '@stencil/redux';

import {
  RouterHistory,
} from '@stencil/router';

import {
  AppHeader as AppHeader
} from './components/app-layout/app-header/app-header';

declare global {
  interface HTMLAppHeaderElement extends AppHeader, HTMLElement {
  }
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "app-header": HTMLAppHeaderElement;
  }
  interface ElementTagNameMap {
    "app-header": HTMLAppHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-header": JSXElements.AppHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHeaderAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppLayout as AppLayout
} from './components/app-layout/app-layout';

declare global {
  interface HTMLAppLayoutElement extends AppLayout, HTMLElement {
  }
  var HTMLAppLayoutElement: {
    prototype: HTMLAppLayoutElement;
    new (): HTMLAppLayoutElement;
  };
  interface HTMLElementTagNameMap {
    "app-layout": HTMLAppLayoutElement;
  }
  interface ElementTagNameMap {
    "app-layout": HTMLAppLayoutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-layout": JSXElements.AppLayoutAttributes;
    }
  }
  namespace JSXElements {
    export interface AppLayoutAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppMenu as AppMenu
} from './components/app-layout/app-menu/app-menu';

declare global {
  interface HTMLAppMenuElement extends AppMenu, HTMLElement {
  }
  var HTMLAppMenuElement: {
    prototype: HTMLAppMenuElement;
    new (): HTMLAppMenuElement;
  };
  interface HTMLElementTagNameMap {
    "app-menu": HTMLAppMenuElement;
  }
  interface ElementTagNameMap {
    "app-menu": HTMLAppMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-menu": JSXElements.AppMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface AppMenuAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ConnectedLink as ConnectedLink
} from './components/connected-router/connected-link/connected-link';

declare global {
  interface HTMLConnectedLinkElement extends ConnectedLink, HTMLElement {
  }
  var HTMLConnectedLinkElement: {
    prototype: HTMLConnectedLinkElement;
    new (): HTMLConnectedLinkElement;
  };
  interface HTMLElementTagNameMap {
    "connected-link": HTMLConnectedLinkElement;
  }
  interface ElementTagNameMap {
    "connected-link": HTMLConnectedLinkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "connected-link": JSXElements.ConnectedLinkAttributes;
    }
  }
  namespace JSXElements {
    export interface ConnectedLinkAttributes extends HTMLAttributes {
      tag?: string;
      url?: string;
    }
  }
}


import {
  ConnectedRouter as ConnectedRouter
} from './components/connected-router/connected-router';

declare global {
  interface HTMLConnectedRouterElement extends ConnectedRouter, HTMLElement {
  }
  var HTMLConnectedRouterElement: {
    prototype: HTMLConnectedRouterElement;
    new (): HTMLConnectedRouterElement;
  };
  interface HTMLElementTagNameMap {
    "connected-router": HTMLConnectedRouterElement;
  }
  interface ElementTagNameMap {
    "connected-router": HTMLConnectedRouterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "connected-router": JSXElements.ConnectedRouterAttributes;
    }
  }
  namespace JSXElements {
    export interface ConnectedRouterAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  EnhancedRoute as EnhancedRoute
} from './components/connected-router/enhanced-route/enhanced-route';

declare global {
  interface HTMLEnhancedRouteElement extends EnhancedRoute, HTMLElement {
  }
  var HTMLEnhancedRouteElement: {
    prototype: HTMLEnhancedRouteElement;
    new (): HTMLEnhancedRouteElement;
  };
  interface HTMLElementTagNameMap {
    "enhanced-route": HTMLEnhancedRouteElement;
  }
  interface ElementTagNameMap {
    "enhanced-route": HTMLEnhancedRouteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "enhanced-route": JSXElements.EnhancedRouteAttributes;
    }
  }
  namespace JSXElements {
    export interface EnhancedRouteAttributes extends HTMLAttributes {
      checkAuthorization?: boolean;
      component?: string;
      componentProps?: {};
      exact?: boolean;
      role?: string;
      url?: string;
    }
  }
}


import {
  RenderRedirect as RenderRedirect
} from './components/connected-router/render-redirect/render-redirect';

declare global {
  interface HTMLRenderRedirectElement extends RenderRedirect, HTMLElement {
  }
  var HTMLRenderRedirectElement: {
    prototype: HTMLRenderRedirectElement;
    new (): HTMLRenderRedirectElement;
  };
  interface HTMLElementTagNameMap {
    "render-redirect": HTMLRenderRedirectElement;
  }
  interface ElementTagNameMap {
    "render-redirect": HTMLRenderRedirectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "render-redirect": JSXElements.RenderRedirectAttributes;
    }
  }
  namespace JSXElements {
    export interface RenderRedirectAttributes extends HTMLAttributes {
      url?: string;
    }
  }
}


import {
  DashboardPage as DashboardPage
} from './components/dashboard-page/dashboard-page';

declare global {
  interface HTMLDashboardPageElement extends DashboardPage, HTMLElement {
  }
  var HTMLDashboardPageElement: {
    prototype: HTMLDashboardPageElement;
    new (): HTMLDashboardPageElement;
  };
  interface HTMLElementTagNameMap {
    "dashboard-page": HTMLDashboardPageElement;
  }
  interface ElementTagNameMap {
    "dashboard-page": HTMLDashboardPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "dashboard-page": JSXElements.DashboardPageAttributes;
    }
  }
  namespace JSXElements {
    export interface DashboardPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  LoginPage as LoginPage
} from './components/login-page/login-page';

declare global {
  interface HTMLLoginPageElement extends LoginPage, HTMLElement {
  }
  var HTMLLoginPageElement: {
    prototype: HTMLLoginPageElement;
    new (): HTMLLoginPageElement;
  };
  interface HTMLElementTagNameMap {
    "login-page": HTMLLoginPageElement;
  }
  interface ElementTagNameMap {
    "login-page": HTMLLoginPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "login-page": JSXElements.LoginPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LoginPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MainApp as MainApp
} from './components/main-app/main-app';

declare global {
  interface HTMLMainAppElement extends MainApp, HTMLElement {
  }
  var HTMLMainAppElement: {
    prototype: HTMLMainAppElement;
    new (): HTMLMainAppElement;
  };
  interface HTMLElementTagNameMap {
    "main-app": HTMLMainAppElement;
  }
  interface ElementTagNameMap {
    "main-app": HTMLMainAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "main-app": JSXElements.MainAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MainAppAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  EditProject as EditProject
} from './components/projects-page/edit-project/edit-project';

declare global {
  interface HTMLEditProjectElement extends EditProject, HTMLElement {
  }
  var HTMLEditProjectElement: {
    prototype: HTMLEditProjectElement;
    new (): HTMLEditProjectElement;
  };
  interface HTMLElementTagNameMap {
    "edit-project": HTMLEditProjectElement;
  }
  interface ElementTagNameMap {
    "edit-project": HTMLEditProjectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "edit-project": JSXElements.EditProjectAttributes;
    }
  }
  namespace JSXElements {
    export interface EditProjectAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ListProjects as ListProjects
} from './components/projects-page/list-projects/list-projects';

declare global {
  interface HTMLListProjectsElement extends ListProjects, HTMLElement {
  }
  var HTMLListProjectsElement: {
    prototype: HTMLListProjectsElement;
    new (): HTMLListProjectsElement;
  };
  interface HTMLElementTagNameMap {
    "list-projects": HTMLListProjectsElement;
  }
  interface ElementTagNameMap {
    "list-projects": HTMLListProjectsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "list-projects": JSXElements.ListProjectsAttributes;
    }
  }
  namespace JSXElements {
    export interface ListProjectsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  NewProject as NewProject
} from './components/projects-page/new-project/new-project';

declare global {
  interface HTMLNewProjectElement extends NewProject, HTMLElement {
  }
  var HTMLNewProjectElement: {
    prototype: HTMLNewProjectElement;
    new (): HTMLNewProjectElement;
  };
  interface HTMLElementTagNameMap {
    "new-project": HTMLNewProjectElement;
  }
  interface ElementTagNameMap {
    "new-project": HTMLNewProjectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "new-project": JSXElements.NewProjectAttributes;
    }
  }
  namespace JSXElements {
    export interface NewProjectAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ProjectsPage as ProjectsPage
} from './components/projects-page/projects-page';

declare global {
  interface HTMLProjectsPageElement extends ProjectsPage, HTMLElement {
  }
  var HTMLProjectsPageElement: {
    prototype: HTMLProjectsPageElement;
    new (): HTMLProjectsPageElement;
  };
  interface HTMLElementTagNameMap {
    "projects-page": HTMLProjectsPageElement;
  }
  interface ElementTagNameMap {
    "projects-page": HTMLProjectsPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "projects-page": JSXElements.ProjectsPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ProjectsPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ViewProject as ViewProject
} from './components/projects-page/view-project/view-project';

declare global {
  interface HTMLViewProjectElement extends ViewProject, HTMLElement {
  }
  var HTMLViewProjectElement: {
    prototype: HTMLViewProjectElement;
    new (): HTMLViewProjectElement;
  };
  interface HTMLElementTagNameMap {
    "view-project": HTMLViewProjectElement;
  }
  interface ElementTagNameMap {
    "view-project": HTMLViewProjectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "view-project": JSXElements.ViewProjectAttributes;
    }
  }
  namespace JSXElements {
    export interface ViewProjectAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  TranslateString as TranslateString
} from './components/shared/translate-string/translate-string';

declare global {
  interface HTMLTranslateStringElement extends TranslateString, HTMLElement {
  }
  var HTMLTranslateStringElement: {
    prototype: HTMLTranslateStringElement;
    new (): HTMLTranslateStringElement;
  };
  interface HTMLElementTagNameMap {
    "translate-string": HTMLTranslateStringElement;
  }
  interface ElementTagNameMap {
    "translate-string": HTMLTranslateStringElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "translate-string": JSXElements.TranslateStringAttributes;
    }
  }
  namespace JSXElements {
    export interface TranslateStringAttributes extends HTMLAttributes {
      entry?: string;
      values?: {};
    }
  }
}

