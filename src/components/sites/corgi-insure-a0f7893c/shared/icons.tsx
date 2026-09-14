import type { SVGProps } from "react";

/** lucide "unfold-horizontal" — used by the "Draggable!" cursor chip. */
export function UnfoldHorizontalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 12h6" />
      <path d="M8 12H2" />
      <path d="M12 6V2" />
      <path d="M12 10v-2" />
      <path d="M12 16v-2" />
      <path d="M12 22v-4" />
      <path d="m19 15 3-3-3-3" />
      <path d="m5 9-3 3 3 3" />
    </svg>
  );
}

/** lucide "upload" — used inside the form mock's drop zone. */
export function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

/** Speech-bubble tail used by the "An estimate is fine" bubble (viewBox 0 0 20 24). */
export function BubbleTailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 0H20L4 24L0 0Z" fill="white" />
    </svg>
  );
}

/** The "Aurora tunnel" gradient shape behind the Corgi advantage orbs (exact SVG from the site). */
export function AuroraTunnelSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 836 368" xmlns="http://www.w3.org/2000/svg" className="block size-full" style={{ overflow: "visible" }} {...props}>
      <title>Aurora tunnel</title>
      <g filter="url(#aurora-shadow)">
        <path
          d="M24 124V24L169.793 98.0069C203.456 115.095 240.675 124 278.426 124H418H557.574C595.325 124 632.544 115.095 666.207 98.007L812 24V124V245V344L665.853 270.556C632.415 253.752 595.51 245 558.087 245H418H278.173C240.583 245 203.52 253.83 169.968 270.777L25 344L24 245V124Z"
          fill="url(#aurora-gradient)"
        />
      </g>
      <defs>
        <filter id="aurora-shadow" x="0" y="0" width="836" height="368" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.852689 0 0 0 0 0.616345 0 0 0 0 0.793603 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="aurora-gradient" x1="812" y1="184" x2="24" y2="184" gradientUnits="userSpaceOnUse" gradientTransform="translate(-9.990887055167311 0)">
          <stop stopColor="white" />
          <stop offset="0.110577" stopColor="#dde4f6" />
          <stop offset="0.322115" stopColor="#5b75c4" />
          <stop offset="0.649038" stopColor="#1e3a8a" />
          <stop offset="1" stopColor="#8ea6f0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Orange corgi head mark (viewBox 0 0 156.1 156.1) used at the center of the aurora tunnel. */
export function CorgiMarkSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-label="Corgi" role="img" viewBox="0 0 156.1 156.1" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M72.6584 47.6415C75.7435 44.7843 77.8518 45.5845 80.1653 50.4902C81.8291 54.0191 82.7072 57.6034 82.8645 61.5068L82.9846 64.4921L84.1702 64.5947C84.8224 64.6508 86.4769 64.9864 87.8469 65.3398L90.3381 65.9824L92.7981 63.6289C99.9698 56.7682 108.195 52.497 113.587 52.8339C116.793 53.0341 117.985 54.0964 118.478 57.1914C119.392 62.9297 117.03 70.4113 112.478 76.1982C110.857 78.2584 106.003 82.1847 105.062 82.1972C104.382 82.2056 104.405 82.3971 105.771 87.8974C108.326 98.1934 109.811 101.486 113.635 105.328C116.491 108.198 119.055 109.848 123.054 110.957C113.934 123.408 99.7739 131.932 83.5774 133.526C84.1403 131.527 85.009 129.699 86.1819 128.155C87.8235 125.994 87.9424 124.561 86.5334 123.916C85.0624 123.242 83.7783 124.379 81.344 128.509C78.7954 132.833 78.5303 133.147 77.4348 133.147C75.0548 133.147 74.946 130.195 77.1526 125.49C79.2542 121.01 81.5597 118.329 87.5012 113.458C94.4024 107.801 96.5298 104.55 96.7014 99.3945C96.863 94.5309 95.5544 91.0849 92.1916 87.5117C88.8388 83.9496 84.4842 82.3634 79.8577 83.0205C77.8369 83.3074 77.3407 83.2549 76.7131 82.6845C73.5556 79.813 74.7169 74.0221 79.1545 70.5097L80.6038 69.3632L78.6389 69.6181C75.9547 69.9664 73.8832 71.5184 71.8538 74.6992C69.9086 77.7475 69.4057 77.9869 61.9875 79.4081C52.9995 81.1299 52.6014 81.3252 56.2629 82.208C58.8992 82.8435 59.7415 83.9916 58.8469 85.7304C58.1403 87.1035 56.789 88.1738 55.76 88.1738C55.3731 88.1738 55.0559 88.4265 55.0559 88.7353C55.0568 89.4516 57.2265 91.2994 58.3547 91.5449C58.8291 91.6479 62.5398 91.7824 66.6008 91.8437C70.9291 91.9087 73.0895 90.6287 74.2746 89.9267C74.9003 89.5561 75.2541 89.3466 75.512 89.581C76.2065 90.8874 75.3781 92.8561 74.4748 94.0878C73.6705 95.1846 72.3628 96.968 66.0657 96.8613L58.3547 96.332L55.3176 95.2099C53.0299 94.0732 51.8685 93.1937 50.7151 91.7275C48.6544 89.1079 47.4625 85.8297 47.3909 82.5849C47.3235 79.5502 48.0597 78.0606 50.0373 77.2324C51.0523 76.8072 56.3811 75.5585 62.0823 74.4091C62.6078 74.3031 63.2754 73.6255 63.7229 72.7441C64.1384 71.9266 64.8537 70.917 65.3127 70.4999C66.0417 69.8374 66.1467 69.2958 66.1467 66.205C66.1467 64.2596 66.4195 61.2867 66.7522 59.5996C67.5841 55.3837 70.3534 49.7768 72.6584 47.6415ZM62.4778 99.0205C63.7056 98.2121 65.2972 98.7162 66.1096 100.171C66.6466 101.132 66.5971 101.455 65.4631 104.345C63.3517 109.726 62.8465 112.229 62.8215 117.427C62.7937 123.219 63.768 127.974 65.9612 132.483C63.4637 131.931 61.0294 131.212 58.6702 130.337C58.2172 129.023 57.845 127.7 57.5627 126.382C56.5274 121.544 56.635 113.019 57.7864 108.693C58.8356 104.751 61.2107 99.8549 62.4778 99.0205Z"
        fill="#1E3A8A"
      />
    </svg>
  );
}
