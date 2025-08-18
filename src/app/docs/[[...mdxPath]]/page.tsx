import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../../mdx-components'
import React from 'react'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export default async function Page({ params }: { params: { mdxPath?: string[] } }) {
  const { default: MDXContent, toc, metadata } = await importPage(params.mdxPath)
  const components = useMDXComponents({})
  const Wrapper = (components.wrapper ??
    (({ children }: { children: React.ReactNode }) => <>{children}</>)
  ) as React.ComponentType<any>

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent />
    </Wrapper>
  )
}
