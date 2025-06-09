"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { QrCode, FileText } from "lucide-react";
import BasedButton from "../general/BasedButton";

const VCardQRCode = dynamic(() => import("./VCardQRCode"), {
  loading: () => <p className="mt-4">Loading QR Code…</p>,
  ssr: false,
});

export default function QRCard({ vcardLabel }: { vcardLabel: string }) {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleQRClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowQRCode(true);
  };

  return (
    <div className="sm:col-span-6 lg:col-span-4 row-span-2 flex flex-col items-center justify-center space-y-4 rounded-2xl bg-bgaccentlight dark:bg-bgaccentdark backdrop-blur-sm shadow-md p-6">
      {showQRCode ? (
        <>
          <VCardQRCode />
          <BasedButton
            href="/david-hasse.vcf"
            icon={<FileText size={24} />}
            label="vCard"
            download
          />
        </>
      ) : (
        <BasedButton
          onClick={handleQRClick}
          icon={<QrCode size={24} />}
          label={vcardLabel}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}
