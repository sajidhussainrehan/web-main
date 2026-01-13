import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

// Define the type for the context state
interface CookiesConsentContextType {
  consentStatus: boolean | null; // true for accept, false for decline, null for no decision
  acceptCookies: () => void;
  declineCookies: () => void;
}

// Create the context with a default undefined state
const CookiesConsentContext = createContext<
  CookiesConsentContextType | undefined
>(undefined);

// Component to provide context values
export const CookiesConsentProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [consentStatus, setConsentStatus] = useState<boolean | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    try {
      const cookiesConsent = localStorage.getItem("cookies-consent");
      const hasConsent =
        cookiesConsent !== null ? JSON.parse(cookiesConsent) : null;
      setConsentStatus(hasConsent);
    } catch (error) {
      console.error("Failed to read cookies-consent from localStorage", error);
    }

    return () => {
      mounted.current = false;
    };
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem("cookies-consent", "true");
      setConsentStatus(true);
    } catch (error) {
      console.error("Failed to save cookies-consent in localStorage", error);
    }
  };

  const declineCookies = () => {
    try {
      localStorage.setItem("cookies-consent", "false");
      setConsentStatus(false);
    } catch (error) {
      console.error("Failed to save cookies-consent in localStorage", error);
    }
  };

  return (
    <CookiesConsentContext.Provider
      value={{ consentStatus, acceptCookies, declineCookies }}
    >
      {children}
    </CookiesConsentContext.Provider>
  );
};

// Hook to use the context
export const useCookiesConsent = () => {
  const context = useContext(CookiesConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookiesConsent must be used within a CookiesConsentProvider"
    );
  }
  return context;
};
