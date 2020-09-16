import React from 'react'
import { Link } from 'gatsby'

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout'
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO'

export default function NotFound() {
  return (
    <Layout title="Página não encontrada!">
      <SEO title="404: Não encontrada" />
      <p>Você está tentando acessar uma página que não existe... isso é triste.</p>
      <p>
        Se você quiser voltar para a página inicial <Link to="/">clique aqui</Link>
      </p>
    </Layout>
  )
}
