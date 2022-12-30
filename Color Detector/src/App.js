import Box from './Box'
import Input_box from './Input_box';
import { useState } from 'react';
function App() {
  const [colorvalue,setcolorvalue]=useState('');
  const [hexvalue,sethexvalue]=useState('');
  return (
    <div className="App">
      <Box 
        colorvalue={colorvalue} 
        hexvalue={hexvalue}
      />
      <Input_box
       colorvalue={colorvalue}
       setcolorvalue={setcolorvalue}
       sethexvalue={sethexvalue}
      />
    </div>
  );
}

export default App;
