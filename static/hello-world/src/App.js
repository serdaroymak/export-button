import React, { useEffect, useState } from 'react';
import { invoke, view } from '@forge/bridge';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  return (
    <div>
      <button onClick={() => view.close()}>Download</button>
      {data ? data : 'Exporting...'}
    </div>
  );
}

export default App;
