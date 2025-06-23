import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = ({ value }: { value: string }) => {
  return <QRCodeSVG value={value} size={256} width={150} height={150} />;
};

export default QRCodeComponent;
