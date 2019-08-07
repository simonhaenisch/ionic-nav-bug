import { Component, h } from '@stencil/core';

@Component({ tag: 'app-home' })
export class AppHome {
	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button />
					</ion-buttons>
					<ion-title>Home</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content class="ion-padding">
				<p>
					Welcome to the PWA Toolkit. You can use this starter to build entire apps with web components using Stencil
					and ionic/core! Check out the README for everything that comes in this starter out of the box and check out
					our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
				</p>

				<ion-button href="/about" expand="block">
					About page
				</ion-button>
				<ion-button href="/profile" expand="block">
					My profile page
				</ion-button>
				<ion-button href="/profile/ionic" expand="block">
					Ionic's profile page
				</ion-button>
			</ion-content>,
		];
	}
}
