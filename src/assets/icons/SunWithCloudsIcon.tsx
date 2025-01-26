import { SvgIconProps, SvgIcon } from '@mui/material';

const SunWithCloudsIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    {/* Sol */}
    <circle cx="32" cy="32" r="12" fill="#FFD700" />
    {/* Raios do sol */}
    <path
      d="M32 10v4M32 50v4M50 32h4M10 32H6M44.14 19.86l2.83-2.83M19.86 44.14l-2.83 2.83M19.86 19.86l-2.83-2.83M44.14 44.14l2.83 2.83"
      stroke="#FFD700"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Nuvem */}
    <path
      d="M24 40c0-4.418 3.582-8 8-8 2.762 0 5.197 1.373 6.66 3.458A6 6 0 1 1 44 42H20a4 4 0 0 1 4-2Z"
      fill="#90A4AE"
    />
  </SvgIcon>
);

export default SunWithCloudsIcon;
