import SVG from 'react-inlinesvg';

type LogoProps = {
  url: string;
  color?: string;
  size?: number;
};

const Logo: React.FC<LogoProps> = ({ url, color, size = 32 }) => {
  return <SVG src={url} style={{ color, width: size, height: size }} />;
};

export default Logo;
