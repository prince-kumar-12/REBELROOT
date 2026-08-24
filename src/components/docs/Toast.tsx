"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const TOAST_EVENT = "omni-docs:toast";

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent<string>(TOAST_EVENT, { detail: message }));
}

export function ToastHost() {
  const [message, setMessage] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function onToast(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      setMessage(detail);
      setShow(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShow(false), 2200);
    }
    window.addEventListener(TOAST_EVENT, onToast);
    return () => {
      window.removeEventListener(TOAST_EVENT, onToast);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`toast${show ? " show" : ""}`} role="status" aria-live="polite">
      <Check />
      <span>{message}</span>
    </div>
  );
}
