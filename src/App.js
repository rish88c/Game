

import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css"; // Import the CSS file

function App({ gameName }) {
  const { unityProvider, unload  } =
    useUnityContext({
      loaderUrl: `Build/${gameName}.loader.js`,
      dataUrl: "Build/Hey1.data",
      frameworkUrl: "Build/Hey1.framework.js",
      codeUrl: "Build/Hey1.wasm",
    });

  // const handleGameOver = useCallback((userName, score) => {
  //   setIsGameOver(true);
  //   setUserName(userName);
  //   setScore(score);
  // }, []);

  const handleBackButtonClick = () => {
    // Implement your logic to exit the game here
    // For example, you can navigate to a different route or page
    // Or you can hide the Unity component to return to the previous state
    unload();
    window.location.href = "/";
  };

  // useEffect(() => {
  //   addEventListener("GameOver", handleGameOver);
  //   return () => {
  //     removeEventListener("GameOver", handleGameOver);
  //   };
  // }, [addEventListener, removeEventListener, handleGameOver]);

  return (
    <Fragment>
      <Unity unityProvider={unityProvider} />
      <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
    </Fragment>
  );
}


export default App;