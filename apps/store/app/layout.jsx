export const metadata = {
  title: 'Daqaiq Store',
  description: 'Your one-stop shop for quality products',
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