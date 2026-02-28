                        ┌──────────────┐
                        │    NGINX     │
                        │ ReverseProxy │
                        └──────┬───────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
 ┌──────────────┐      ┌──────────────┐        ┌──────────────┐
 │  Next.js     │      │  API Gateway │        │ Redis Cache  │
 │  Frontend    │      │  (NestJS)    │        └──────────────┘
 └──────────────┘      └──────┬───────┘
                               │
                      ┌──────────────┐
                      │ Projects MS  │
                      │  (NestJS)    │
                      └──────┬───────┘
                             │
                      ┌──────────────┐
                      │ PostgreSQL   │
                      └──────────────┘


🧠 Final Architecture Flow (Memorize This)

Browser
↓
Nginx (port 80)
↓
/api → api-gateway (3000)
↓
projects-service (3001)
↓
Redis (cache check)
↓
PostgreSQL
↓
Response back