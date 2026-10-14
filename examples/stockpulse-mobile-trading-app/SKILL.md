---
name: stockpulse-mobile-trading-app
en_name: StockPulse — Mobile Trading App
description: 深色模式手机股票交易应用原型，包含投资组合仪表盘、股票详情图表、搜索浏览、交易执行和用户资料5个交互屏幕。
en_description: A dark-mode mobile stock trading app prototype with 5 interactive screens — portfolio dashboard, stock detail with chart, explore/search, trade execution, and user profile.
category: prototype
tags:
  - mobile
  - trading
  - fintech
  - dark-mode
  - stock-market
  - portfolio
od:
  mode: prototype
  surface: prototype
  preview:
    type: html
    entry: example.html
  design_system:
    requires: colorful
  example_prompt: >-
    Create a mobile app design for a stock trading app. The app should include
    multiple screens: a home/portfolio dashboard showing total balance and
    holdings, a stock detail page with a candlestick chart and key metrics, a
    search/explore stocks screen, and a trade execution screen with buy/sell
    actions. The design should feel modern, professional, and trustworthy —
    think dark mode fintech aesthetic with green/red for gains/losses, clean
    typography, and intuitive mobile-first UX. Target iPhone-sized screens
    (390px width).
---

# StockPulse — Mobile Trading App

A dark-mode, mobile-first stock trading app prototype rendered inside a realistic iPhone frame (390×844 px). The design features 5 fully interactive screens connected by tab navigation, built with a fintech-grade color palette: deep purple backgrounds, cyan and pink accents, and green/red for gains and losses.

## Screens

1. **Portfolio (Home)** — Total portfolio value with sparkline chart, quick-action buttons (Buy, Sell, Explore, Alerts), and a scrollable holdings list showing 4 positions with live-style gain/loss indicators.
2. **Explore** — Search bar, horizontal category filter chips (All, Stocks, ETFs, Crypto, Commodities), a trending-stocks card with mini-charts, and ranked top-gainers / top-losers lists.
3. **Stock Detail** — Full-width price chart with 6 time-period pills (1H, 1D, 1W, 1M, 1Y, ALL), 6-stat grid (Open, High, Low, Volume, Mkt Cap, P/E), about section with category chips, and Buy / Sell CTAs.
4. **Trade** — Buy/Sell toggle, Market/Limit/Stop order-type selector, stock selector card, quantity stepper with +/- buttons, live order summary, and a gradient confirm button.
5. **Profile** — Avatar with account stats (portfolio, trades, all-time return), settings list (Linked Accounts, Notifications, Settings), and sign-out button.

## Design system tokens

Built on the **Colorful** design system adapted for dark fintech:

| Token | Value |
|-------|-------|
| Background | `#1E1B2E` / `#2A2640` / `#332F4A` |
| Accent cyan | `#00D4FF` |
| Accent pink | `#FF5C8A` |
| Accent yellow | `#FFD93D` |
| Gain green | `#00E88F` |
| Loss red | `#FF5C5C` |
| Text primary | `#FFFFFF` |
| Text secondary | `#B8B3D0` |
| Text muted | `#8B85AA` |
| Font sans | Inter |
| Font mono | SF Mono / Fira Code |
| Font serif | Iowan Old Style / Charter / Georgia |

## How to reproduce

1. Copy `example.html` into a new workspace or Open Design project.
2. The file is a single self-contained HTML document — no build step, no external dependencies beyond Google Fonts (Inter).
3. Open it in a browser to see the iPhone-framed prototype. Click the bottom nav tabs or in-screen buttons to switch between screens.
4. All CSS variables are defined in `:root` at the top of the `<style>` block — adjust the color tokens to re-skin for a different brand.
5. The JavaScript at the bottom handles tab navigation, buy/sell toggle, quantity adjustment, and chip selection. Modify or extend as needed.