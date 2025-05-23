# Dev Chidi Portfolio

A modern, responsive portfolio website for web and mobile app developers built with Next.js and Tailwind CSS.

![Dev Chidi Portfolio](https://placeholder.svg?height=400&width=800)

## Features

- 🚀 Modern and responsive design
- 💻 Optimized for all devices
- ✨ Smooth animations and transitions
- 📱 Showcases web and mobile projects
- 🎨 Developer-friendly color scheme
- 📝 Simple contact form solutions
- 🔍 SEO optimized

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v8.0.0 or higher) or [yarn](https://yarnpkg.com/) (v1.22.0 or higher)
- [Git](https://git-scm.com/) for cloning the repository

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**

   \`\`\`bash
   git clone https://github.com/yourusername/dev-chidi-portfolio.git
   cd dev-chidi-portfolio
   \`\`\`

2. **Install dependencies**

   Using npm:
   \`\`\`bash
   npm install
   or
   pnpm install
   \`\`\`

   Or using yarn:
   \`\`\`bash
   yarn install
   \`\`\`

## Running the Development Server

To start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To create an optimized production build:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

To start the production server:

\`\`\`bash
npm run start
# or
yarn start
\`\`\`

## Project Structure

\`\`\`
dev-chidi-portfolio/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page component
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact section
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation bar
│   ├── projects.tsx      # Projects section
│   └── skills.tsx        # Skills section
├── public/               # Static assets
├── README.md             # Project documentation
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
└── tailwind.config.ts    # Tailwind CSS configuration
\`\`\`

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide React](https://lucide.dev/) - Icon library

## Contact Form Setup

The portfolio includes a contact form that uses EmailJS with a fallback to the mailto method if EmailJS is not properly configured.

#### Setting up EmailJS (Recommended for Production)

For the contact form to work with EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service and template
3. Get your Public Key, Service ID, and Template ID
4. Replace the placeholders in the `contact.tsx` file:
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS template ID

#### Fallback Mechanism

If EmailJS is not properly configured or fails to send, the form will automatically fall back to opening the user's default email client with a pre-filled message. This ensures that users can still contact you even if there are issues with the EmailJS service.

## Contact Form Options

The portfolio includes multiple contact form options. Choose the one that works best for you:

### 1. EmailJS (Default)

The default implementation uses EmailJS, a client-side solution that sends emails directly from the browser without any server-side code.

To set up EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service and template
3. Get your Public Key, Service ID, and Template ID
4. Replace the placeholders in the `contact.tsx` file:
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS template ID

### 2. Formspree

An alternative implementation using Formspree is provided in `contact-formspree.tsx`. To use it:

1. Rename `contact-formspree.tsx` to `contact.tsx` (replace the existing file)
2. Create a free account at [Formspree](https://formspree.io/)
3. Create a new form and get your form ID
4. Replace `YOUR_FORM_ID` in the code with your Formspree form ID

### 3. Mailto Link

The simplest option is to use a mailto link that opens the user's default email client. This implementation is provided in `contact-mailto.tsx`. To use it:

1. Rename `contact-mailto.tsx` to `contact.tsx` (replace the existing file)
2. Update the email address in the code to your preferred contact email

## Customization

### Changing Personal Information

Edit the content in the component files to update your personal information:

- `components/hero.tsx` - Update your name, title, and introduction
- `components/about.tsx` - Update your story, experience, and education
- `components/skills.tsx` - Update your skills and expertise
- `components/projects.tsx` - Update your project portfolio
- `components/contact.tsx` - Update your contact  - Update your project portfolio
- `components/contact.tsx` - Update your contact information
- `components/footer.tsx` - Update footer links and information

### Changing Colors

The color scheme is defined in `app/globals.css`. You can modify the CSS variables to change the colors:

\`\`\`css
:root {
  --background: 230 25% 12%;
  --foreground: 210 40% 98%;
  --primary: 180 100% 50%;
  /* other color variables */
}
\`\`\`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Formspree Documentation](https://formspree.io/docs/)

## Troubleshooting

If you encounter any issues with the contact form:

1. Check that you've correctly set up your chosen contact form solution
2. For EmailJS, verify that your service, template, and public key are correct
3. For Formspree, ensure your form ID is correct
4. For the mailto option, test that it opens your default email client correctly

Remember that the mailto option will only work if the user has a default email client configured on their device.
