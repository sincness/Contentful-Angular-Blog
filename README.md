# ContentFul Angular blog project

![Angular](https://img.shields.io/badge/Angular-red.svg)
![Contentful](https://img.shields.io/badge/Contentful-green.svg)
![Github_actions](https://img.shields.io/badge/Github_actions-blue.svg)

FireBase hosting : https://contentful-angular-blog.web.app/home

## Get alle posts in a query and single post

```ts

  async getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(Object.assign({}, query))
      .then(res => res.items);
  }

  getSinglePost(contentId: any): Observable<any> {
    const promise = this.cdaClient.getEntry(contentId);
    return from(promise).pipe(map(entry => entry.fields));
  }

```

## Building and Deplying to firebase hosting

```yml
name: Build and Deploy to Firebase
on:
  push:
    branches: [master]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js 12.8
        uses: actions/setup-node@v1
        with:
          node-version: 12.8
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build -- --prod
      - name: Deploy to Firebase
        uses: w9jds/firebase-action@master
        with:
          args: deploy --only hosting
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

## Continuous Integration for mergering to Master

```yml
name: Node Continuous Integration

on:
  pull_request:
    branches: [master]

jobs:
  test_pull_request:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12
        uses: actions/setup-node@v1
        with:
          node-version: 12
      - name: Install dependencies
        run: npm ci
      - name: Test
        run: |
          npm run test-headless
      - name: Build
        run: npm run build
```
