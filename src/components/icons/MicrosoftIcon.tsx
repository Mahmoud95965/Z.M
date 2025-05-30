import * as React from 'react';

const MicrosoftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <rect width="9" height="9" x="1" y="1" fill="#F35325" />
    <rect width="9" height="9" x="10" y="1" fill="#81BC06" />
    <rect width="9" height="9" x="1" y="10" fill="#05A6F0" />
    <rect width="9" height="9" x="10" y="10" fill="#FFBA08" />
    <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#E5E7EB" strokeOpacity="0.2" />
  </svg>
);

export default MicrosoftIcon;
