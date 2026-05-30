export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#101112]">{children}</div>
  )
}
