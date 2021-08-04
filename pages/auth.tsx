import { Typography } from '@supabase/ui'
import React from 'react'
import { Container } from '@material-ui/core'
import { Auth } from '@supabase/ui'
import Layout from '../components/layout'
import { supabase } from '../constants/supabaseClient'

export default function Home() {
  const { user } = Auth.useUser()

  if (!user)
    return (
      <Layout>
        <Container maxWidth="sm">
        <Auth
            supabaseClient={supabase}
            providers={['google', 'github']}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
            redirectTo="/"
        />
        </Container>
      </Layout>
    )
    else return <Layout><Typography>Already logged in.</Typography></Layout>
}