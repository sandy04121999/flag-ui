# FlagFeatureUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```
Tech Stack

Angular 19

## Standalone Components (no NgModule)

Reactive Forms

HttpClient

TypeScript

CSS (simple styling)

## Purpose

# The UI allows administrators or developers to:

Enter a feature key

Provide optional user/group/region context

Evaluate whether the feature is enabled

View the result instantly

## This connects to:

GET /api/features/evaluate


## on the backend.

# Architecture
FeatureCheckComponent (Standalone)
        ↓
FeatureService (HttpClient)
        ↓
ASP.NET Core API

## Design Decisions

# Standalone components for modern Angular architecture

# Reactive Forms instead of ngModel (better scalability)

Thin UI layer (no business logic in component)

Service handles API communication

## Getting Started
1. Install dependencies
npm install

2. Run the application
ng serve


## Application will start at:

http://localhost:4200

Backend Requirement

## The backend API must be running on:

http://localhost:5000


# If running on a different port, update the API base URL in:

feature.service.ts


Example:

private baseUrl = 'http://localhost:5000/api/features';

Proxy Configuration (Recommended)

# To avoid CORS issues during development, create:

proxy.conf.json

{
  "/api": {
    "target": "http://localhost:5000",
    "secure": false
  }
}


# Then update angular.json:

"serve": {
  "options": {
    "proxyConfig": "proxy.conf.json"
  }
}


## Now Angular will forward /api calls automatically.

Folder Structure
src/app/
├── components/
│   └── feature-check.component.ts
├── services/
│   └── feature.service.ts

Assumptions

# Backend API is available locally

# Feature evaluation is read-only

# No authentication required for demo purposes

## Tradeoffs

Chosen:

Simple UI for clarity

No state management library (NgRx not required)

Minimal styling

Not included:

Authentication

Feature CRUD management

Role-based access control

What Could Be Improved

## With more time:

Feature list management screen

Toggle switches for feature enable/disable

Pagination & search

Admin authentication

Audit trail display

Angular Material integration

## Production environment config
This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
