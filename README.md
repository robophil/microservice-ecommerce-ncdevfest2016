# microservice-ecommerce-ncdevfest2016
Repository for holding the codelab for ncdevfest.com 2016. A sample ecommerce application built using cote.js

## getting started
```bash
npm install
```

## start monolith
runs on port `3000`

```bash
node monolith/app.js
```

## start microservice
runs on port `2000`

```bash
node microservice/payment-service.js
node microservice/app.js
```

## simulater request
Simulate request at intervals to `/payment` on both platforms
``bash
node index-mono.js
node index-micro.js
