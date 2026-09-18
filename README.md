# Mezbaan Restaurant Okara

## Overview

Mezbaan Restaurant Okara is a food & restaurant web app using MainAppContent and data models CartContextType, BrandLogoProps, CakeCustomizerModalProps.

Modern responsive restaurant website with online ordering, menu, customized cakes, event booking, gallery, and admin order management

## What the code does

- **Components / views:** MainAppContent, App
- **Models / types:** CartContextType, BrandLogoProps, CakeCustomizerModalProps, CakesSectionProps, ContactFormSectionProps, DishOrderModalProps, EventLawnSectionProps, FooterProps
- **Source files inspected:** src/App.tsx, src/main.tsx, index.html, src/context/CartContext.tsx, src/components/AboutSection.tsx, src/components/BrandLogo.tsx, src/components/CakeCustomizerModal.tsx, src/components/CakesSection.tsx

## Features

- **Shopping cart / checkout**: Found cart or checkout code in source files
- **Booking or reservations**: Found booking/reservation code in source files
- **Data models**: Found models/schemas: CartContextType, BrandLogoProps, CakeCustomizerModalProps, CakesSectionProps
- **Responsive Interface & Theming**: Modern utility CSS with responsive breakpoints
- **RESTful API Architecture**: Dedicated backend API route endpoints

## Tech Stack

- **Frameworks & Core**: React, Express
- **Languages**: TypeScript, HTML5, CSS3
- **Styling**: Tailwind CSS
- **Tooling & Environment**: Vite

## Project Structure

```text
src/                 # Main source code containing core business logic and modules.
components/          # Reusable UI components and visual elements.
package.json         # Node.js dependency manifest and run scripts.
```

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm, yarn, or pnpm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Sher-Bahadur-Dev/Mezbaan-Restaurant.git

# Navigate into the project folder
cd Mezbaan-Restaurant

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
GEMINI_API_KEY=your_gemini_api_key_here
APP_URL=your_app_url_here
```

### Running the Project

```bash
npm run dev
```

## License

This project is open source and available under standard GitHub terms.
