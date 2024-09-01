import React from 'react';
 
function Home() {
    const [showMessage, setShowMessage] = React.useState(false);
     
    const ShowMessageFc = () => {
        setShowMessage(!showMessage);
        console.log("ShowMessageFc" + showMessage);
    }

    return (
        <>
            <h1>Oi Heloiza &lt;3</h1>

            <button onClick={ShowMessageFc}>Clique aqui Heloiza, nada de mal vai acontecer com vc</button>

            {showMessage && <p>Na moral, vai tomar no cu {":)"}</p>}
        </>
    )
}

export default Home;