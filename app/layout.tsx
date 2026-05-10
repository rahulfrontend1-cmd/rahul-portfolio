import './globals.css'

export const metadata = {
  title: 'Rahul Kumar | Full Stack Developer',
  description:
    'Senior Full Stack Developer specializing in React.js, Next.js, NestJS, GraphQL and scalable enterprise applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}