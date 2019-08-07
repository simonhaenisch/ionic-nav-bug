import { Component, h } from '@stencil/core';

@Component({ tag: 'app-about' })
export class AppAbout {
	render() {
		return [
			<ion-header>
				<ion-toolbar color="primary">
					<ion-buttons slot="start">
						<ion-back-button />
					</ion-buttons>
					<ion-title>About</ion-title>
				</ion-toolbar>
			</ion-header>,

			<ion-content class="ion-padding">
				<p>About page.</p>

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
