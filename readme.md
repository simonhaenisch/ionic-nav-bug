# Ionic Nav Bug

Reproduces a bug with `ion-nav`'s `pop` method. Deployed on https://ionic-nav-bug.now.sh.

The routes are set up in a way where two different routes render the same component:

```tsx
<ion-router useHash={false}>
  <ion-route url="/" component="app-home" />
  <ion-route url="/about" component="app-about" />
  <ion-route url="/profile" component="app-profile" />
  <ion-route url="/profile/:name" component="app-profile" />
</ion-router>
```

To reproduce, do the following:

1. Go to Ionic's profile page (`/profile/ionic`).
2. Go to About page (`/about`).
3. Click the `ion-back-button` (not the browser's back button).

**Expected:**

Goes back to `/profile/ionic` route and shows Ionic's profile.

**Actual:**

It shows Ionic's profile, but the route goes to `/profile` (drops the "name" route prop).
