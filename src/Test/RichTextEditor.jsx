import MUIRichTextEditor from 'mui-rte'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'

const myTheme = createTheme({
    // Set up your custom MUI theme here
})

const RichTextEditor = () => {
    const [type , setType] = useState('')

    const save = (e) => {
        setType(e)
        console.log(e)
    }

    return (  
        <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor 
        defaultValue={type}
        label="Start typing..." 
        
        onSave={save}
        />
        </ThemeProvider>
    );
}
 
export default RichTextEditor;