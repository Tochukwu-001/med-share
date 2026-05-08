<<<<<<< HEAD
"use client";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children }) {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
=======
"use client"

import { SessionProvider } from "next-auth/react"

export default function Provider ({children}) {
    return (
        <div>
            <SessionProvider>
                {children}
            </SessionProvider>
        </div>
    )
}
>>>>>>> 4184e35e9cfdbd4fe05ba9d70fb4062d21b87038
