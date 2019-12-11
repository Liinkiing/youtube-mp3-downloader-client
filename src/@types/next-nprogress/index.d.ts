declare module 'next-nprogress' {
  export interface NProgressOptions {
    color?: string
    options?: { trickleSpeed: number }
    showAfterMs?: number
    spinner?: boolean
  }

  type WithNProgressHoc = (
    delay: number,
    options?: NProgressOptions,
  ) => (ComposedComponent: React.ComponentType) => void
  const hoc: WithNProgressHoc
  export default hoc
}
