/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_WHATSAPP_DISPLAY?: string;
  readonly VITE_ADDRESS_LINE1?: string;
  readonly VITE_ADDRESS_LINE2?: string;
  readonly VITE_MAPS_URL?: string;
  readonly VITE_HOURS_WEEKDAYS?: string;
  readonly VITE_HOURS_SATURDAY?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_DOCTOR_NAME?: string;
  readonly VITE_DOCTOR_ROLE?: string;
  readonly VITE_DOCTOR_CRO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
