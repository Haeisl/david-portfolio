"use client";

import { useEffect, useState } from "react";
import { generateQRCodeDataUrl } from "@/app/utils/generateQRCode";
import { vCardString } from "@/app/utils/vcard";
import Image from "next/image";

export default function VCardQRCode() {
  const [qrCodeUrl, setQRCodeUrl] = useState<string | null>(null);

  useEffect(() => {
    generateQRCodeDataUrl(vCardString).then((url) => {
      setQRCodeUrl(url);
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-[180px] h-180px] mt-2 p-2 border border-bgaccentlight dark:border-bgaccentdark rounded-2xl shadow-md bg-white">
      {qrCodeUrl ? (
        <Image src={qrCodeUrl} alt="vCard QR Code" width={180} height={180} />
      ) : (
        <p className="">Loading QR Code...</p>
      )}
    </div>
  );
}
