import { TestContextProvider } from "../../../context/TestContext"
import TestComponent from "./TestComponent"

const MainTestArea = () => {
  return (
    <div>
      <TestContextProvider>
        <TestComponent />
      </TestContextProvider>
    </div>
  )
}

export default MainTestArea
