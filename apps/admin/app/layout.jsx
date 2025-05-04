export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for managing the application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" data-theme="light">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
} 