import CustomInput from './_components/formElements/input'
import PublicLayout from './_layout/publicLayout'


function App() {

  return (
    <>
        <PublicLayout/>
        <CustomInput
        fullWidth
        label='name'
        />
    </>
  )
}

export default App
