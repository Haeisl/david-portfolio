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
    <div className="flex items-center justify-center w-[250px] h-[250px] p-5 border border-bgaccentlight dark:border-bgaccentdark rounded-2xl shadow-md bg-white">
      {qrCodeUrl ? (
        <Image src={qrCodeUrl} alt="vCard QR Code" width={200} height={200} />
      ) : (
        <p className="">Loading QR Code...</p>
      )}
    </div>
  );
}
