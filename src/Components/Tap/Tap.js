import React, { useEffect } from 'react';

function Tap(props) {

    useEffect( ()=> {
      props.setSwitchs(true)
    });
  
    if (props.push === 0) {
     return <div style={{paddingTop: '30px'}}> Everyone love this shoes </div>
    }
    else if(props.push === 1) {
      return <div style={{paddingTop: '30px'}}> If you order before 3pm, You can get it delivered on the same day. </div>
    }
    else if(props.push === 2) {
      return <div style={{paddingTop: '30px'}}> No Review </div>
    }
  }

export default Tap;