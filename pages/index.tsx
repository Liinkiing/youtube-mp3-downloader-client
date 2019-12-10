import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import SearchForm from '~/components/SearchForm'

const IndexInner = styled.div``

const Index: NextPage = () => (
  <IndexInner>
    <AppHead title="Homepage" />
    <p>Hello from home</p>
    <SearchForm />
  </IndexInner>
)

export default Index
