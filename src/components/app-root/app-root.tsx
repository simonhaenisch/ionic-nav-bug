import { Component, h } from '@stencil/core';

@Component({ tag: 'app-root' })
export class AppRoot {
	render() {
		return (
			<ion-app>
				<ion-router useHash={false}>
					<ion-route url="/" component="app-home" />
					<ion-route url="/about" component="app-about" />
					<ion-route url="/profile" component="app-profile" />
					<ion-route url="/profile/:name" component="app-profile" />
				</ion-router>
				<ion-nav />
			</ion-app>
		);
	}
}
