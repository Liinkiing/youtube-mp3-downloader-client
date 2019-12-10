import { createContext, createElement } from 'react'

interface Props {
  hubUrl: string
}

export const MercureContext = createContext<string>('')

const MercureProvider: React.FC<Props> = props => {
  const { hubUrl, children } = props

  return createElement(MercureContext.Provider, { value: hubUrl }, children)
}

export default MercureProvider
