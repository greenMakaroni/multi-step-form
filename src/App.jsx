import useWindowDimensions from "./custom_hooks/useWindowDimensions"
import Form from "./components/Form"

function App() {
  const { width } = useWindowDimensions()
  const isDesktop = width > 1200
  return (
    <>
      <Form isDesktop={isDesktop} />
    </>
  )
}

export default App
