import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function FirstGame() {
  const { unityProvider} = useUnityContext({
    loaderUrl: "/Build/Hey1.loader.js",
    dataUrl: "/Build/Hey1.data",
    frameworkUrl: "/Build/Hey1.framework.js",
    codeUrl: "/Build/Hey1.wasm",
  });
  return (
    <>
    <Unity unityProvider={unityProvider} />
    </>
  );
}

export default FirstGame;