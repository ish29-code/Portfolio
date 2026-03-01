FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

# Install dbmate
RUN apk add --no-cache curl
RUN curl -fsSL https://github.com/amacneil/dbmate/releases/latest/download/dbmate-linux-amd64 -o /usr/local/bin/dbmate
RUN chmod +x /usr/local/bin/dbmate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3001

CMD sh -c "dbmate up && pnpm start:prod"