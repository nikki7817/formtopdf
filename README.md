# Form to PDF Application

A modern Next.js application that allows users to fill out a form and generate/download a PDF document with their information.

## 🚀 Features

- **Interactive Form**: Clean, responsive form with real-time validation
- **PDF Generation**: Generate PDF documents using React-PDF
- **PDF Preview**: Preview the PDF before downloading
- **PDF Download**: Download the generated PDF with form data
- **State Management**: Zustand for efficient state management
- **Modern UI**: Tailwind CSS for beautiful, responsive design
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **PDF Generation**: @react-pdf/renderer
- **State Management**: Zustand
- **UI**: React 19.1.0
- **Package Manager**: npm

## 📋 Form Fields

The application includes the following form fields:

- **Name** (Required) - User's full name
- **Email** (Required) - Valid email address with validation
- **Phone Number** (Required) - Minimum 10 digits
- **Position** (Optional) - Job position or title
- **Description** (Optional) - Work experience or additional details

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/nikki7817/formtopdf.git
cd formtopdf
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
formtopdf/
├── public/
│   └── icons/          # SVG icons for the UI
├── src/
│   ├── app/
│   │   ├── preview/    # PDF preview page
│   │   ├── store/      # Zustand store for state management
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout component
│   │   └── page.tsx    # Main form page
│   └── components/
│       └── PDFDocument.tsx # PDF generation component
├── package.json
└── README.md
```

## 🎯 How It Works

1. **Form Input**: Users fill out the form with their details
2. **Validation**: Real-time validation ensures required fields are completed
3. **Preview**: Users can preview their information before generating PDF
4. **PDF Generation**: React-PDF creates a formatted PDF document
5. **Download**: Users can download the generated PDF file

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 📄 PDF Features

- Clean, professional layout
- Properly formatted text and spacing
- Includes all form data fields
- Generated filename: `form-details.pdf`

## 🎨 UI Features

- Responsive design that works on all devices
- Modern gradient buttons
- Icon-enhanced input fields
- Form validation with error messages
- Disabled state for incomplete forms
- Loading states during PDF generation

## 🔄 State Management

The application uses Zustand for simple and efficient state management:

- Form data persistence across pages
- Real-time form validation
- State updates for PDF generation

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- PDF generation requires JavaScript to be enabled
- Large descriptions might affect PDF formatting

## 🔮 Future Enhancements

- [ ] Multiple PDF templates
- [ ] File upload support
- [ ] Email PDF functionality
- [ ] Form data persistence in localStorage
- [ ] Advanced PDF styling options
- [ ] Export to other formats (Word, Excel)

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js and React-PDF
