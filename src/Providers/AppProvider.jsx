import { createContext, useEffect, useState } from "react";
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

    const appInfo={
     installedApps,
     handleInstall,
    }
    return(
        <AppContext.Provider value={appInfo}>
         {children}
        </AppContext.Provider>
    )
} 

export default AppProvider;