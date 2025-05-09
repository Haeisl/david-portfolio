import QRCode from "qrcode";

export const generateQRCodeDataUrl = async (text: string) => {
  try {
    const url = await QRCode.toDataURL(text, {
      width: 300,
      margin: 2,
      color: {
        dark: "#000", // QR code color
        light: "#FFF", // Background color
      },
    });
    return url;
  } catch (err) {
    console.error(err);
    return null;
  }
};
