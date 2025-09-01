import { useReactPWAInstall } from "react-pwa-install";

const AndroidPwaPrompt = () => {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  // Check if the PWA install is supported and not already installed
  if (!supported || isInstalled) {
    return null;
  }

  const handleInstallClick = () => {
    pwaInstall()
      .then(() => {
        console.log("PWA install accepted!");
      })
      .catch(() => {
        console.log("PWA install cancelled or failed.");
      });
  };

  return (
    <div className="pwa-prompt-container">
      <p>Add to home screen for a better experience!</p>
      <button onClick={handleInstallClick}>Install</button>
    </div>
  );
};

export default AndroidPwaPrompt;