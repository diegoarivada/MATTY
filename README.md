# MATTY Bot

MATTY is a lightweight Discord bot built with `discord.js` and a Wolfram|Alpha integration.

## Features

- `!help` command for basic command discovery
- `ping` command that returns a Wolfram|Alpha short-answer response

## Setup

1. Install dependencies:
   - `npm install`
2. Copy the environment file and set your values:
   - `cp .env.example .env`
3. Add your credentials in `.env`:
   - `TOKEN=<discord_bot_token>`
   - `WOLF=<wolframalpha_app_id>`
4. Start the bot:
   - `node index.js`

## Security / Cyber Tooling

This repository now includes a GitHub CodeQL workflow (`.github/workflows/codeql.yml`) for automated security analysis, matching the cybersecurity scanning approach used across other repositories.
