# PDF Upload and Analysis App

A Next.js application that allows users to upload PDF files and analyze their content using AI. The app provides a simple interface for PDF processing with real-time feedback.

## Features

- 📄 **PDF Upload**: Easy drag-and-drop PDF file upload
- 🤖 **AI Analysis**: Automatic content extraction and analysis
- 📱 **Responsive Design**: Modern UI built with Tailwind CSS
- 🔄 **Real-time Feedback**: Loading states and toast notifications
- ⚡ **Fast Performance**: Built with Next.js and Turbopack

## Tech Stack

- **Framework**: Next.js 15.5.4
- **Styling**: Tailwind CSS 4.1.14
- **UI Components**: Radix UI primitives
- **File Upload**: UploadThing
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Package Manager**: pnpm

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.js           # Root layout component
│   └── page.js             # Home page
├── components/
│   ├── uploadPdf.js        # Main PDF upload component
│   └── ui/                 # Reusable UI components
│       ├── alert-dialog.jsx
│       ├── button.jsx
│       ├── card.jsx
│       ├── form.jsx
│       ├── input.jsx
│       ├── label.jsx
│       ├── select.jsx
│       └── sonner.jsx
├── lib/
│   └── utils.js            # Utility functions
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oms-next
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Configuration

### UploadThing Setup

The app uses UploadThing for file uploads. Make sure to configure:

1. **API Endpoint**: Currently set to `http://localhost:3000/api/uploadthing`
2. **Upload Configuration**: Modify the upload settings in [`components/uploadPdf.js`](components/uploadPdf.js)

### PDF Analysis API

The app expects a backend API endpoint at `/api/pdf-reader` that accepts:

```json
{
  "fileUrl": "string",
  "question": "string"
}
```

And returns:

```json
{
  "response": [
    {
      "text": "string"
    }
  ]
}
```

## Components

### Main Components

- **[`UploadPdf`](components/uploadPdf.js)**: Core component handling file upload and PDF analysis
- **[`Uploadbutton`](components/uploadPdf.js)**: Generated upload button from UploadThing

### UI Components

The app includes a comprehensive set of UI components based on Radix UI:

- [`Card`](components/ui/card.jsx) - Container components
- [`Button`](components/ui/button.jsx) - Interactive buttons
- [`Form`](components/ui/form.jsx) - Form controls
- [`Input`](components/ui/input.jsx) - Input fields
- [`Select`](components/ui/select.jsx) - Dropdown selections
- [`AlertDialog`](components/ui/alert-dialog.jsx) - Modal dialogs

## Styling

The project uses:

- **Tailwind CSS**: For utility-first styling
- **CSS Variables**: For theming support
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Ready for theme switching

### Color Scheme

- Primary: Neutral-based palette
- Accent: Gray tones for professional appearance
- Status: Success/Error states for user feedback

## API Integration

### File Upload Flow

1. User selects PDF file
2. File uploads to UploadThing service
3. Success callback triggers backend analysis
4. Results displayed in the UI

### Error Handling

- Upload errors display toast notifications
- Loading states prevent multiple submissions
- Network errors are gracefully handled

## Development

### Code Style

- ESLint configuration for code quality
- Prettier-compatible formatting
- Consistent component structure

### Path Aliases

Configured aliases for clean imports:

```json
{
  "@/*": ["./*"],
  "@/components": ["./components"],
  "@/lib": ["./lib"]
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform supporting Next.js:

- Netlify
- Railway
- Digital Ocean
- AWS Amplify

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# UploadThing Configuration
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_app_id

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
```

