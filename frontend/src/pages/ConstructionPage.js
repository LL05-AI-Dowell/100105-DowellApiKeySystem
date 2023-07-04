import styles from "./ConstructionPage.css";
import DowellLogo from "../dowellLogo.png";

const ConstructionPage = ({ hideLogo, message }) => {
  return (
    <div className="construction__Page__Container">
      {hideLogo ? <></> : <img src={DowellLogo} alt="dowell logo" />}
      <svg
        className="construction__Svg"
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m264.26 218.12a.5.5 0 0 1 -.5-.5v-33.26a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5v33.26a.5.5 0 0 1 -.5.5z"
          fill="#231f20"
        />
        <path
          d="m332.6 224.34h-265.2a.51.51 0 0 1 -.5-.5.5.5 0 0 1 .5-.5h265.2a.5.5 0 0 1 .5.5.51.51 0 0 1 -.5.5z"
          fill="#d1d3d4"
        />
        <rect
          fill="#fff"
          height="143.39"
          rx="7.15"
          width="202.43"
          x="98.18"
          y="64.11"
        />
        <path
          d="m293.46 208h-188.14a7.65 7.65 0 0 1 -7.64-7.65v-129.09a7.65 7.65 0 0 1 7.64-7.65h188.14a7.66 7.66 0 0 1 7.65 7.65v129.09a7.66 7.66 0 0 1 -7.65 7.65zm-188.14-143.39a6.65 6.65 0 0 0 -6.64 6.65v129.09a6.65 6.65 0 0 0 6.64 6.65h188.14a6.65 6.65 0 0 0 6.65-6.65v-129.09a6.65 6.65 0 0 0 -6.65-6.65z"
          fill="#231f20"
        />
        <path d="m105.66 74.1h187.47v123.42h-187.47z" fill="#57A639" />
        <path d="m229.51 228.26h-60.24l6.81-20.76h46.63z" fill="#fff" />
        <path
          d="m229.51 228.78h-60.24a.52.52 0 0 1 -.42-.22.53.53 0 0 1 -.07-.46l6.81-20.76a.52.52 0 0 1 .49-.35h46.62a.5.5 0 0 1 .49.35l6.81 20.76a.47.47 0 0 1 -.07.46.5.5 0 0 1 -.42.22zm-59.53-1h58.82l-6.47-19.78h-45.87z"
          fill="#231f20"
        />
        <rect
          fill="#fff"
          height="5.85"
          rx="2.92"
          width="76.04"
          x="161.37"
          y="228.26"
        />
        <path
          d="m234.49 234.62h-70.19a3.44 3.44 0 1 1 0-6.87h70.19a3.44 3.44 0 1 1 0 6.87zm-70.19-5.84a2.41 2.41 0 1 0 0 4.81h70.19a2.41 2.41 0 1 0 0-4.81z"
          fill="#231f20"
        />
        <path
          d="m171.08 222.76c1-.52 53.13-10 53.13-10l-1.71-5.21h-46.63z"
          fill="#231f20"
        />
        <path
          d="m171.07 223.27a.47.47 0 0 1 -.32-.12.5.5 0 0 1 -.15-.54l4.8-15.26a.49.49 0 0 1 .47-.35h46.63a.5.5 0 0 1 .47.35l1.71 5.21a.5.5 0 0 1 0 .41.55.55 0 0 1 -.34.24c-14.3 2.61-51.68 9.5-53 10a.46.46 0 0 1 -.27.06zm5.17-15.27-4.42 14.06c6.47-1.44 42.64-8.07 51.73-9.74l-1.42-4.32z"
          fill="#231f20"
        />
        <g fill="#fff">
          <path d="m165.28 133.49a9.58 9.58 0 0 1 -1.81 3.3 8.49 8.49 0 0 1 -2.85 2.14 9.32 9.32 0 0 1 -7.42 0 8.21 8.21 0 0 1 -2.8-2.14 10 10 0 0 1 -1.77-3.3 14 14 0 0 1 -.62-4.28v-16.21h5v15.7a8.81 8.81 0 0 0 .22 2 5.71 5.71 0 0 0 .68 1.7 3.29 3.29 0 0 0 1.21 1.19 3.45 3.45 0 0 0 1.81.44 3.38 3.38 0 0 0 3-1.63 5.46 5.46 0 0 0 .68-1.7 9.42 9.42 0 0 0 .2-2v-15.7h5v16.17a13.45 13.45 0 0 1 -.53 4.32z" />
          <path d="m183.26 139-8.4-17h-.09l.12 17h-4.89v-26h5.75l8.37 17h.09l-.12-17h4.91v26z" />
          <path d="m212.79 126a15.39 15.39 0 0 1 -1 5.88 11.6 11.6 0 0 1 -2.68 4.08 10.6 10.6 0 0 1 -3.76 2.34 12.53 12.53 0 0 1 -4.25.75h-7.79v-26.05h7.56a15.44 15.44 0 0 1 4.36.64 10.16 10.16 0 0 1 3.84 2.13 10.66 10.66 0 0 1 2.71 4 16.09 16.09 0 0 1 1.01 6.23zm-5.25 0a10.06 10.06 0 0 0 -.57-3.65 6 6 0 0 0 -1.54-2.31 5.7 5.7 0 0 0 -2.18-1.23 8.93 8.93 0 0 0 -2.52-.37h-2.51v15.18h2.39a8.77 8.77 0 0 0 2.61-.38 5.76 5.76 0 0 0 2.21-1.27 6.17 6.17 0 0 0 1.54-2.34 10.09 10.09 0 0 0 .57-3.63z" />
          <path d="m216.12 139v-26h14v5.28h-9.12v4.91h8.67v5h-8.67v5.39h9.71v5.42z" />
          <path d="m245.21 139-4.53-10.3h-1.68v10.3h-5v-26h8a11.09 11.09 0 0 1 2.94.39 6.87 6.87 0 0 1 2.57 1.3 6.51 6.51 0 0 1 1.81 2.42 9.12 9.12 0 0 1 .68 3.74 8.14 8.14 0 0 1 -1.15 4.44 6.37 6.37 0 0 1 -3.19 2.56l5.45 11.15zm-.21-18a3.08 3.08 0 0 0 -.31-1.49 2.36 2.36 0 0 0 -.8-.88 3.11 3.11 0 0 0 -1.1-.42 6.8 6.8 0 0 0 -1.17-.11h-2.69v6.05h2.4a6.22 6.22 0 0 0 1.27-.13 3.63 3.63 0 0 0 1.19-.45 2.54 2.54 0 0 0 .87-1 3.29 3.29 0 0 0 .34-1.57z" />
          <path d="m154.66 158.08a4.18 4.18 0 0 1 -2.06.49 4.46 4.46 0 0 1 -3.51-1.62 5.74 5.74 0 0 1 -1-1.87 7.26 7.26 0 0 1 -.37-2.39 7.1 7.1 0 0 1 .38-2.42 5.48 5.48 0 0 1 1.05-1.85 4.62 4.62 0 0 1 1.58-1.17 4.7 4.7 0 0 1 1.95-.41 4.64 4.64 0 0 1 1.91.42 3.64 3.64 0 0 1 1.52 1.22l-1.5 1.82a2 2 0 0 0 -.82-.77 2.24 2.24 0 0 0 -1-.25 2.15 2.15 0 0 0 -1.07.26 2.56 2.56 0 0 0 -.83.71 3.42 3.42 0 0 0 -.54 1.08 4.79 4.79 0 0 0 0 2.74 3.21 3.21 0 0 0 .53 1.08 2.38 2.38 0 0 0 .82.7 2.2 2.2 0 0 0 1.05.25 2.08 2.08 0 0 0 1.15-.31 2.39 2.39 0 0 0 .79-.82l1.54 1.76a4.6 4.6 0 0 1 -1.57 1.35z" />
          <path d="m166.48 152.66a7.34 7.34 0 0 1 -.37 2.41 5.79 5.79 0 0 1 -1 1.88 4.59 4.59 0 0 1 -3.58 1.62 4.69 4.69 0 0 1 -2-.42 4.74 4.74 0 0 1 -1.58-1.2 5.79 5.79 0 0 1 -1-1.88 7.34 7.34 0 0 1 -.37-2.41 7.26 7.26 0 0 1 .37-2.41 5.59 5.59 0 0 1 1-1.84 4.62 4.62 0 0 1 1.58-1.16 4.84 4.84 0 0 1 2-.41 4.93 4.93 0 0 1 2 .41 4.62 4.62 0 0 1 1.58 1.16 5.59 5.59 0 0 1 1 1.84 7.26 7.26 0 0 1 .37 2.41zm-2.36 0a4.54 4.54 0 0 0 -.2-1.35 3.21 3.21 0 0 0 -.53-1.08 2.56 2.56 0 0 0 -.83-.71 2.26 2.26 0 0 0 -1.07-.26 2.18 2.18 0 0 0 -1.05.26 2.56 2.56 0 0 0 -.83.71 3.22 3.22 0 0 0 -.54 1.08 4.89 4.89 0 0 0 -.19 1.35 4.71 4.71 0 0 0 .2 1.39 3.75 3.75 0 0 0 .53 1.1 2.56 2.56 0 0 0 .83.71 2.27 2.27 0 0 0 2.11 0 2.56 2.56 0 0 0 .83-.71 3.33 3.33 0 0 0 .54-1.1 4.71 4.71 0 0 0 .2-1.39z" />
          <path d="m173.76 158.27-3.68-7.27.05 7.28h-2.15v-11.14h2.53l3.67 7.27-.06-7.27h2.15v11.13z" />
          <path d="m183 150a2.25 2.25 0 0 0 -.74-.7 1.84 1.84 0 0 0 -.89-.26 2.28 2.28 0 0 0 -.44.05 1 1 0 0 0 -.41.18 1.32 1.32 0 0 0 -.31.35 1.08 1.08 0 0 0 -.12.54.94.94 0 0 0 .1.47.88.88 0 0 0 .28.33 2.42 2.42 0 0 0 .45.26l.58.25c.31.12.63.26 1 .41a3.51 3.51 0 0 1 .92.61 3.11 3.11 0 0 1 .68.93 3.24 3.24 0 0 1 .27 1.4 4.21 4.21 0 0 1 -.29 1.66 3.17 3.17 0 0 1 -.78 1.15 3.3 3.3 0 0 1 -1.12.68 4.14 4.14 0 0 1 -1.31.22 4.53 4.53 0 0 1 -1.9-.42 4 4 0 0 1 -1.52-1.19l1.44-1.79a2.76 2.76 0 0 0 .89.84 2 2 0 0 0 1.09.34 1.86 1.86 0 0 0 .48-.06 1 1 0 0 0 .41-.21 1.07 1.07 0 0 0 .28-.37 1.61 1.61 0 0 0 .1-.57 1 1 0 0 0 -.13-.54 1.53 1.53 0 0 0 -.37-.4 3 3 0 0 0 -.59-.33l-.81-.32a7.49 7.49 0 0 1 -.86-.41 3.1 3.1 0 0 1 -.75-.6 2.86 2.86 0 0 1 -.53-.9 4.22 4.22 0 0 1 .11-2.87 3.09 3.09 0 0 1 2-1.71 4.32 4.32 0 0 1 1.28-.19 4 4 0 0 1 1.58.34 4.05 4.05 0 0 1 1.42 1z" />
          <path d="m189.54 149.43v8.84h-2.21v-8.84h-2.58v-2.29h7.38v2.29z" />
          <path d="m198 158.27-2-4.42h-.75v4.42h-2.16v-11.13h3.49a4.93 4.93 0 0 1 1.28.16 3.07 3.07 0 0 1 1.13.56 2.79 2.79 0 0 1 .79 1 3.82 3.82 0 0 1 .3 1.61 3.47 3.47 0 0 1 -.5 1.9 2.83 2.83 0 0 1 -1.4 1.1l2.39 4.76zm-.09-7.72a1.35 1.35 0 0 0 -.14-.64 1 1 0 0 0 -.35-.37 1.26 1.26 0 0 0 -.48-.18 2.32 2.32 0 0 0 -.51-.05h-1.19v2.59h1.06a2.62 2.62 0 0 0 .55-.05 1.48 1.48 0 0 0 .52-.2 1 1 0 0 0 .39-.41 1.36 1.36 0 0 0 .24-.69z" />
          <path d="m209.18 155.91a4 4 0 0 1 -.79 1.41 3.57 3.57 0 0 1 -1.25.92 4.17 4.17 0 0 1 -3.25 0 3.49 3.49 0 0 1 -1.23-.92 4.16 4.16 0 0 1 -.77-1.41 5.88 5.88 0 0 1 -.27-1.84v-6.93h2.19v6.71a4 4 0 0 0 .1.87 2.39 2.39 0 0 0 .3.73 1.37 1.37 0 0 0 .53.51 1.52 1.52 0 0 0 .79.19 1.55 1.55 0 0 0 .8-.19 1.37 1.37 0 0 0 .53-.51 2.16 2.16 0 0 0 .3-.73 4 4 0 0 0 .09-.87v-6.71h2.21v6.93a5.6 5.6 0 0 1 -.28 1.84z" />
          <path d="m217.8 158.08a4.16 4.16 0 0 1 -2.06.49 4.55 4.55 0 0 1 -2-.42 4.67 4.67 0 0 1 -1.56-1.2 5.74 5.74 0 0 1 -1-1.87 7.26 7.26 0 0 1 -.37-2.39 7.36 7.36 0 0 1 .38-2.42 5.84 5.84 0 0 1 1.05-1.85 4.62 4.62 0 0 1 1.58-1.17 4.73 4.73 0 0 1 1.95-.41 4.61 4.61 0 0 1 1.91.42 3.64 3.64 0 0 1 1.52 1.22l-1.5 1.82a2 2 0 0 0 -.81-.77 2.31 2.31 0 0 0 -1-.25 2.17 2.17 0 0 0 -1.07.26 2.56 2.56 0 0 0 -.83.71 3.64 3.64 0 0 0 -.54 1.08 4.79 4.79 0 0 0 0 2.74 3.63 3.63 0 0 0 .53 1.08 2.41 2.41 0 0 0 .83.7 2.13 2.13 0 0 0 1 .25 2.08 2.08 0 0 0 1.15-.31 2.39 2.39 0 0 0 .79-.82l1.54 1.76a4.6 4.6 0 0 1 -1.49 1.35z" />
          <path d="m224.08 149.43v8.84h-2.21v-8.84h-2.58v-2.29h7.38v2.29z" />
          <path d="m227.68 158.27v-11.13h2.22v11.13z" />
          <path d="m241.33 152.66a7.34 7.34 0 0 1 -.38 2.41 5.79 5.79 0 0 1 -1 1.88 4.64 4.64 0 0 1 -1.58 1.2 4.77 4.77 0 0 1 -2 .42 4.59 4.59 0 0 1 -3.57-1.62 5.79 5.79 0 0 1 -1-1.88 7.34 7.34 0 0 1 -.37-2.41 7.26 7.26 0 0 1 .37-2.41 5.59 5.59 0 0 1 1-1.84 4.62 4.62 0 0 1 1.58-1.16 4.85 4.85 0 0 1 2-.41 4.92 4.92 0 0 1 2 .41 4.53 4.53 0 0 1 1.58 1.16 5.59 5.59 0 0 1 1 1.84 7.25 7.25 0 0 1 .37 2.41zm-2.37 0a4.54 4.54 0 0 0 -.19-1.35 3.42 3.42 0 0 0 -.54-1.08 2.46 2.46 0 0 0 -.83-.71 2.25 2.25 0 0 0 -1.06-.26 2.19 2.19 0 0 0 -1.06.26 2.56 2.56 0 0 0 -.83.71 3.42 3.42 0 0 0 -.54 1.08 4.89 4.89 0 0 0 -.19 1.35 4.71 4.71 0 0 0 .2 1.39 3.75 3.75 0 0 0 .53 1.1 2.56 2.56 0 0 0 .83.71 2.19 2.19 0 0 0 1.06.26 2.25 2.25 0 0 0 1.06-.26 2.63 2.63 0 0 0 .82-.71 3.34 3.34 0 0 0 .55-1.1 4.72 4.72 0 0 0 .23-1.39z" />
          <path d="m248.6 158.27-3.68-7.27.05 7.28h-2.14v-11.14h2.52l3.67 7.27-.06-7.27h2.15v11.13z" />
        </g>
        <path
          d="m287.06 140.2a.48.48 0 0 1 -.4-.2c-.2-.26-4.71-6.44-4.71-21.9v-54.83a.51.51 0 0 1 .5-.5.5.5 0 0 1 .5.5v54.83c0 15.13 4.46 21.24 4.51 21.3a.51.51 0 0 1 -.1.7.49.49 0 0 1 -.3.1z"
          fill="#231f20"
        />
        <path d="m84.69 170.14h9.63v74.73h-9.63z" fill="#fff" />
        <path
          d="m94.33 245.36h-9.64a.5.5 0 0 1 -.5-.5v-74.72a.5.5 0 0 1 .5-.5h9.64a.5.5 0 0 1 .5.5v74.72a.5.5 0 0 1 -.5.5zm-9.14-1h8.64v-73.72h-8.64z"
          fill="#231f20"
        />
        <path d="m143.7 170.14h9.63v74.73h-9.63z" fill="#fff" />
        <path
          d="m153.34 245.36h-9.64a.5.5 0 0 1 -.5-.5v-74.72a.5.5 0 0 1 .5-.5h9.64a.5.5 0 0 1 .5.5v74.72a.5.5 0 0 1 -.5.5zm-9.14-1h8.64v-73.72h-8.64z"
          fill="#231f20"
        />
        <path d="m75.31 175.74h85.48v25.66h-85.48z" fill="#fff" />
        <path
          d="m160.79 175.74v25.66h-85.48v-25.66zm0-1h-85.48a1 1 0 0 0 -1 1v25.66a1 1 0 0 0 1 1h85.48a1 1 0 0 0 1-1v-25.66a1 1 0 0 0 -1-1z"
          fill="#231f20"
        />
        <path d="m106.19 201.4h-13.11l-16.2-25.65h13.11z" fill="#d1d3d4" />
        <path d="m132.7 201.4h-13.11l-16.2-25.65h13.11z" fill="#d1d3d4" />
        <path d="m159.21 201.4h-13.11l-16.2-25.65h13.11z" fill="#d1d3d4" />
        <path d="m75.31 211.61h83.91v8.29h-83.91z" fill="#fff" />
        <path
          d="m159.21 220.4h-83.9a.5.5 0 0 1 -.5-.5v-8.29a.5.5 0 0 1 .5-.5h83.9a.5.5 0 0 1 .5.5v8.29a.5.5 0 0 1 -.5.5zm-83.4-1h82.9v-7.29h-82.9z"
          fill="#231f20"
        />
        <path
          d="m324.23 236.51h-29.36l1.38-4.67.26-.89 1.61-5.42.79-2.68 1.7-5.75.35-1.17 1.87-6.32.18-.61 1.7-5.75.96-3.24 1.44-4.86 1.64-5.56h1.58l1.64 5.56.78 2.6 1.62 5.5.73 2.44.98 3.31.57 1.91 1.83 6.19.52 1.76 1.19 3.99.36 1.23 2.03 6.87.31 1.06z"
          fill="#fff"
        />
        <path
          d="m310.33 189.59 1.64 5.56.78 2.6 1.62 5.5.73 2.44 1 3.31.57 1.92 1.83 6.18.52 1.76 1.18 4 .36 1.23 2 6.87.31 1.06 1.33 4.5h-29.33l1.38-4.67.26-.89 1.61-5.42.79-2.68 1.7-5.75.35-1.17 1.87-6.32.17-.62 1.7-5.75 1-3.24 1.44-4.86 1.64-5.56h1.58m0-1h-1.58a1 1 0 0 0 -.95.72l-1.65 5.55-1.44 4.87-.95 3.24-1.71 5.74-.18.61-1.9 6.32-.35 1.18-1.7 5.75-.79 2.67-1.61 5.43-.26.89-1.38 4.67a1 1 0 0 0 .16.88 1 1 0 0 0 .8.4h29.35a1 1 0 0 0 1-1.28l-1.33-4.5-.32-1.06-2-6.88-.36-1.22-1.19-4-.52-1.75-1.82-6.19-.57-1.92-1-3.3-.73-2.45-1.62-5.49-.78-2.61-1.64-5.55a1 1 0 0 0 -1-.72z"
          fill="#231f20"
        />
        <rect
          fill="#fff"
          height="4.16"
          rx="1.08"
          width="37.56"
          x="290.77"
          y="236.51"
        />
        <path
          d="m327.25 241.17h-35.4a1.58 1.58 0 0 1 -1.58-1.58v-2a1.58 1.58 0 0 1 1.58-1.58h35.4a1.58 1.58 0 0 1 1.58 1.58v2a1.58 1.58 0 0 1 -1.58 1.58zm-35.4-4.17a.58.58 0 0 0 -.58.58v2a.58.58 0 0 0 .58.58h35.4a.58.58 0 0 0 .58-.58v-2a.58.58 0 0 0 -.58-.58z"
          fill="#231f20"
        />
        <path
          d="m322.58 230.95h-26.07l1.61-5.42.79-2.68h21.28l.36 1.23z"
          fill="#d1d3d4"
        />
        <path
          d="m318.48 217.1h-17.87l.35-1.17 1.87-6.32.18-.61h13.07l.57 1.91z"
          fill="#d1d3d4"
        />
        <path
          d="m314.37 203.25h-9.66l.96-3.24 1.44-4.86h4.86l.78 2.6z"
          fill="#d1d3d4"
        />
        <path
          d="m270.72 64.24 35.39 42.28a.75.75 0 0 0 1.3-.63 52.73 52.73 0 0 0 -3.52-10.49l-28.71-33.69-3.64.45a1.27 1.27 0 0 0 -.82 2.08z"
          fill="#fff"
        />
        <path
          d="m306.67 107.29a1.23 1.23 0 0 1 -.94-.45l-35.4-42.28a1.77 1.77 0 0 1 1.15-2.9l3.64-.45a.5.5 0 0 1 .44.18l28.71 33.69a.86.86 0 0 1 .07.1 53.75 53.75 0 0 1 3.55 10.6 1.25 1.25 0 0 1 -1.22 1.51zm-35.57-43.37 35.4 42.28a.23.23 0 0 0 .29.06.24.24 0 0 0 .13-.27 53.45 53.45 0 0 0 -3.46-10.32l-28.46-33.43-3.37.41a.8.8 0 0 0 -.63.49.79.79 0 0 0 .13.78z"
          fill="#231f20"
        />
        <path
          d="m275.18 61.71 28.71 33.69s10.91-13.14 8.69-23.86-11.89-17.79-22.58-16.17-14.82 6.34-14.82 6.34z"
          fill="#fff"
        />
        <path
          d="m303.89 95.9a.49.49 0 0 1 -.38-.18l-28.71-33.72a.5.5 0 0 1 0-.65c.17-.2 4.33-4.88 15.1-6.51s20.87 5.48 23.17 16.57c2.25 10.83-8.35 23.73-8.8 24.28a.49.49 0 0 1 -.38.18zm-28-34.16 28 32.87c1.88-2.42 10.14-13.73 8.22-23-2.19-10.56-11.67-17.35-22-15.78-8.87 1.36-13.11 4.85-14.25 5.91z"
          fill="#231f20"
        />
        <path
          d="m305.11 86.81a.54.54 0 0 1 -.21 0 .49.49 0 0 1 -.24-.66 31.78 31.78 0 0 0 2.28-19.89.5.5 0 0 1 1-.26 32.22 32.22 0 0 1 -2.34 20.57.52.52 0 0 1 -.49.24z"
          fill="#d1d3d4"
        />
        <path d="m302.03 93.22 4.45-3.84 3.07 3.42-4.48 4.74z" fill="#fff" />
        <path
          d="m305.07 98a.51.51 0 0 1 -.37-.21l-3-4.32a.49.49 0 0 1 .09-.66l4.36-3.81a.51.51 0 0 1 .7 0l3.07 3.41a.51.51 0 0 1 0 .68l-4.48 4.74a.48.48 0 0 1 -.37.17zm-2.37-4.73 2.42 3.44 3.75-4-2.43-2.71z"
          fill="#231f20"
        />
        <path
          d="m301.56 84.05a.54.54 0 0 1 -.21 0 .5.5 0 0 1 -.25-.66 25.82 25.82 0 0 0 .59-20.68.51.51 0 0 1 .23-.67.5.5 0 0 1 .67.23 26.88 26.88 0 0 1 -.59 21.48.51.51 0 0 1 -.44.3z"
          fill="#d1d3d4"
        />
        <path
          d="m98.18 131.28a.5.5 0 0 1 -.11-1c.62-.13 62.62-14.25 81-66.34a.5.5 0 0 1 .63-.31.51.51 0 0 1 .31.64c-18.52 52.63-81.05 66.85-81.68 67z"
          fill="#231f20"
        />
        <path
          d="m199.88 86.84q-1 0-1.95 0c-37.55-1.33-68-22.08-68.31-22.29a.49.49 0 0 1 -.13-.69.5.5 0 0 1 .7-.13c.3.21 30.52 20.79 67.77 22.11 29.14 1 48.41-21.79 48.6-22a.51.51 0 0 1 .71-.06.49.49 0 0 1 .06.7c-.19.18-18.9 22.36-47.45 22.36z"
          fill="#231f20"
        />
        <path
          d="m238.22 96a8.85 8.85 0 0 1 -.89 0c-5.78-.6-10-6.34-12.11-16.59a80.35 80.35 0 0 1 -1.51-15.24.5.5 0 0 1 .5-.5.51.51 0 0 1 .5.51c0 .29-.22 29.47 12.72 30.83a6.91 6.91 0 0 0 5.49-1.84c7.48-6.7 7.69-28.78 7.69-29a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.51c0 .92-.22 22.74-8 29.73a7.88 7.88 0 0 1 -5.39 2.09z"
          fill="#231f20"
        />
      </svg>
      <div>
        <h1 className="title">
          {message ? message : "Site currently under construction/maintenance"}
        </h1>
        <p className="description">
          We apologize for any inconveniences caused.
        </p>
      </div>
    </div>
  );
};

export default ConstructionPage;