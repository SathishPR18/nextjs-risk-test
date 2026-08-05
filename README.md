# nextjs-risk-test

A minimal Next.js/TypeScript test repo used to demonstrate the AI Code Risk Monitor GitHub App.

## Purpose

This repo is used to test the risk scoring system. When PRs are opened here, the AI Code Risk Monitor automatically scores each changed file and posts a comment + status check.

## Key files

- `middleware.ts` — auth middleware (triggers middleware signal 🟡)
- `auth.config.ts` — auth configuration (triggers auth signal 🔴)
- `app/api/users/route.ts` — API route with Zod validation

## Running locally

```bash
npm install
npm run dev
```
