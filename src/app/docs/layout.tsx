// src/app/docs/layout.tsx
import 'nextra-theme-docs/style.css';
import type { ReactNode } from 'react';
import { Layout, Navbar, Footer } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';

export const metadata = {
  title: 'Docs'
}

export default async function DocsLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()
  return (
    <>
      <Head />
      <Layout
        pageMap={pageMap}
        navbar={<Navbar logo={<b>YourDocs</b>} />}
        banner={<Banner storageKey="nextra-v4">Welcome to the docs</Banner>}
        footer={<Footer>© {new Date().getFullYear()} Your Company</Footer>}
        docsRepositoryBase="https://github.com/your/repo/tree/main/src/app/docs"
        sidebar={{ autoCollapse: true }}
      >
        {children}
      </Layout>
    </>
  )
}
