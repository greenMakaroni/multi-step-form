import useWindowDimensions from "../custom_hooks/useWindowDimensions"


const Sidebar = () => {
  const { width } = useWindowDimensions()
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar