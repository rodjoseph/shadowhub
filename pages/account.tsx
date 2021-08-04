import { Avatar, Button, Container, TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { supabase } from '../constants/supabaseClient'
import { Profile } from '../types/types'

export default function Account() {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<Profile>()
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState(null)
  const user = supabase.auth.user()

  useEffect(() => {
    getProfile()
  }, [user])

  async function getProfile() {
    try {
      setLoading(true)


      let { data, error, status } = await supabase
        .from('profiles')
        .select(`*`)
        .eq('id', user!.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setProfile(data)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url } : {username: string, website: string, avatar_url: string}) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user!.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
    <Container sx={{
      mt: 1,
    }}>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>
      <Avatar src={profile?.avatar_url}/>
      <TextField id="email" type="text" value={user!.email} disabled label="Email"/>
      <TextField
        id="username"
        type="text"
        value={profile?.username || ''}
        onChange={(e) => setUsername(e.target.value)}
        label="Username"
        margin="dense"
      />
      <TextField
        id="website"
        type="website"
        value={profile?.website || ''}
        onChange={(e) => setWebsite(e.target.value)}
        label="Website"
        margin="dense"
      />
      <Button
        onClick={() => updateProfile({ username, website, avatar_url })}
        disabled={loading}
      >
        {loading ? 'Loading ...' : 'Update profile'}
      </Button>

      <Button onClick={() => supabase.auth.signOut()} color="error">
        Sign Out
      </Button>
    </form>
    </Container>
    </Layout>
  )
}
