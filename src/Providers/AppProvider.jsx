import { createContext,  useState } from "react";
import { toast } from "react-toastify";

export const AppContext =createContext(null);


const AppProvider = ({children}) =>{
      const [installedApps, setInstalledApps] = useState(() => {
    return JSON.parse(localStorage.getItem("installedApps")) || [];
  });
 
    const handleInstall=(app)=>{
        if(installedApps.includes(app.id)) return

    const updated = [...installedApps, app.id];
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));

    toast.success(`${app.title} installed`);
      

    }

const handleUninstall = (id) => {
    const updated = installedApps.filter(appId => appId !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
     toast.error('Uninstalled Successfully');
  };

    const appInfo={
     installedApps,
     handleInstall,
     handleUninstall
    }
    return(
        <AppContext.Provider value={appInfo}>
         {children}
        </AppContext.Provider>
    )
} 

export default AppProvider;