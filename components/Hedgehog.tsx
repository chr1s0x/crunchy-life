export default function Hedgehog({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 84 66"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Spines — drawn first so tips poke above the back */}
      <polygon points="13,34 8,14 19,32"  fill="#3D1C08" />
      <polygon points="24,24 21,4  31,22"  fill="#3D1C08" />
      <polygon points="36,19 35,0  44,18"  fill="#3D1C08" />
      <polygon points="47,21 50,2  56,19"  fill="#3D1C08" />
      <polygon points="57,27 62,10 65,25"  fill="#3D1C08" />

      {/* Back dome — covers spine bases */}
      <path d="M10,48 C10,48 9,22 37,20 C60,20 67,36 67,48 Z" fill="#7B4A26" />

      {/* Belly */}
      <ellipse cx="36" cy="50" rx="25" ry="15" fill="#FAEBD7" />

      {/* Back paw */}
      <ellipse cx="18" cy="60" rx="9"  ry="4"   fill="#C4956A" />
      <circle  cx="11" cy="63" r="2"             fill="#B8845A" />
      <circle  cx="17" cy="64" r="2"             fill="#B8845A" />
      <circle  cx="24" cy="63" r="2"             fill="#B8845A" />

      {/* Front paw */}
      <ellipse cx="53" cy="60" rx="8"  ry="3.5"  fill="#C4956A" />
      <circle  cx="47" cy="63" r="2"             fill="#B8845A" />
      <circle  cx="53" cy="64" r="2"             fill="#B8845A" />
      <circle  cx="59" cy="63" r="2"             fill="#B8845A" />

      {/* Ear */}
      <ellipse cx="60" cy="32" rx="5"  ry="6.5"  fill="#FAEBD7" />
      <ellipse cx="60" cy="33" rx="3"  ry="4.5"  fill="#F2B0B0" />

      {/* Head / snout */}
      <ellipse cx="65" cy="46" rx="12" ry="11"   fill="#FAEBD7" />

      {/* Cheek blush */}
      <ellipse cx="64" cy="49" rx="5"  ry="2.8"  fill="#F4BFBF" opacity="0.45" />

      {/* Eye */}
      <circle cx="70"  cy="41"    r="3.2"        fill="#1C0A02" />
      <circle cx="71.2" cy="39.8" r="1.2"        fill="white"   />

      {/* Nose */}
      <ellipse cx="75" cy="47" rx="2.8" ry="2.2" fill="#C87B7B" />

      {/* Smile */}
      <path
        d="M71,51 Q73,54.5 77,52"
        stroke="#8B5E3C"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
