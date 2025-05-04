export const metadata = {
  title: 'Supplier Dashboard',
  description: 'Supplier dashboard for managing products and inventory',
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