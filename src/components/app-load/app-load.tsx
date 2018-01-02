import {
  Component
} from '@stencil/core';

/**
 * AppLoad is a wrapper component which helps keeping the index.html file as clean as possible.
 *
 * Responsabilities:
 *   - Render the icons component which holds the SVG icons definitions
 *   - Initialize the Stencil Router (there should be only one in the app)
 *   - Load the Connected (Redux) Router (there should be only in the app)
 */
@Component({
  tag: 'app-load'
})
export class AppLoad {
  public render(): JSX.Element[] {
    return [
      <app-icons />,
      <stencil-router>
        <stencil-route url='/' component='app-main' />
      </stencil-router>
    ];
  }
}