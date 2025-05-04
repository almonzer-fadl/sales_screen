export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for managing the application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        {children}
      </body>
    </html>
  )
} 