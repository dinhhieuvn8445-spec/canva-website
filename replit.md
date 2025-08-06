# Replit MD

## Overview

This is a Vietnamese language landing page for a Canva course platform called "HDT AI". The application is a full-stack web application built with React frontend and Express.js backend, designed to promote and handle registrations for comprehensive Canva design courses. The platform offers multiple course packages (basic, advanced, and combo) with AI integration focus, targeting Vietnamese learners interested in graphic design and content creation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/UI components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod schema validation
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging
- **Development**: Hot reload with Vite middleware integration

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL (indicated by @neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **In-Memory Fallback**: MemStorage class for development/testing without database dependency
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple

### Database Schema Design
- **Users Table**: Basic user authentication with username/password
- **Registrations Table**: Course registration form data including contact information, course package selection, and optional fields
- **Validation**: Zod schemas for both insert operations and API request validation
- **Type Safety**: Full TypeScript integration with inferred types from database schema

### Authentication and Authorization
- **Session-Based**: Traditional session-based authentication (no JWT implementation visible)
- **Storage**: Sessions stored in PostgreSQL using connect-pg-simple
- **Security**: Basic session configuration with secure defaults expected in production

### Form and Validation System
- **Client-Side**: React Hook Form with Zod resolver for real-time validation
- **Server-Side**: Zod schema validation on API endpoints with detailed error responses
- **User Experience**: Vietnamese language error messages and success notifications
- **Toast Notifications**: Custom toast system for user feedback

### Development and Build System
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict TypeScript configuration with path mapping
- **Asset Handling**: Support for static assets with @assets alias
- **Development Server**: Integrated Vite dev server with Express API routes
- **Hot Reload**: Full hot module replacement for development efficiency

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting platform
- **Drizzle ORM**: Type-safe database toolkit and query builder
- **PostgreSQL**: Primary database engine for data persistence

### UI and Design System
- **Shadcn/UI**: Pre-built component library with customizable design system
- **Radix UI**: Headless UI primitives for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Additional icon library for specific design elements

### Development and Build Tools
- **Vite**: Next-generation frontend build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

### Third-Party Integrations
- **Google Sheets API**: Planned integration for registration data export (referenced but not implemented)
- **External Assets**: References to Vietnamese instructor photos and marketing materials
- **Replit Integration**: Development environment integration with Replit-specific tooling

### Form and Validation Libraries
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for runtime type checking
- **TanStack Query**: Server state management and caching solution

### Utilities and Helpers
- **Class Variance Authority**: Utility for creating component variants
- **CLSX**: Conditional CSS class name utility
- **Date-fns**: Date manipulation and formatting library
- **Nanoid**: Unique ID generation for client-side operations