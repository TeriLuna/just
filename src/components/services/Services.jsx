import React from "react";
import { Link } from "react-scroll";
import WineArrow from "../arrows/WineArrow";

const Services = () => {
  const plantImg = (
    <svg
      width="519"
      height="784"
      viewBox="0 0 519 784"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-132.679 774.959C-77.1461 760.496 -30.5619 724.774 6.73693 682.042C45.5358 637.613 74.3626 586.009 98.7787 532.612C123.972 477.504 145.106 420.648 170.767 365.775C177.199 352.031 183.946 338.484 191.132 325.124C198.498 311.524 206.395 297.731 216.553 285.937C226.806 274.086 238.976 263.99 248.99 251.96C256.561 242.851 262.955 232.771 268.336 222.204C290.56 178.207 294.662 127.848 313.64 82.5816C315.92 77.1583 318.429 71.7905 321.196 66.5253C322.331 64.3372 319.325 62.076 317.617 63.964C273.987 112.512 240.657 171.222 221.259 233.585C215.725 251.462 211.677 269.538 208.89 288.08C208.365 291.586 213.533 292.917 214.305 289.39C227.328 225.848 250.731 164.616 287.193 110.822C297.505 95.5533 308.851 81.0193 320.896 67.0986C319.728 66.251 318.484 65.3849 317.317 64.5373C295.196 108.277 289.421 157.706 271.518 203.031C267.168 214.009 262.045 224.679 255.718 234.654C248.224 246.446 238.919 256.548 229.04 266.35C218.103 277.188 207.893 288.364 199.102 301.013C190.537 313.393 183.398 326.725 176.383 340.045C148.339 393.252 126.829 449.492 103.14 504.721C80.0604 558.604 54.3316 612.088 18.1467 658.561C0.534598 681.147 -19.2208 702.246 -41.5029 720.27C-63.5483 738.151 -87.7149 752.45 -113.761 763.67C-120.344 766.518 -126.976 769.072 -133.764 771.265C-136.195 771.969 -135.168 775.568 -132.679 774.959Z"
        fill="#734061"
        fill-opacity="0.1"
      />
      <path
        d="M310.563 74.7724C301.478 87.4713 294.354 101.573 287.572 115.596C280.941 129.333 274.777 143.304 268.843 157.33C256.786 185.822 245.627 214.611 232.358 242.608C224.858 258.435 216.929 274.199 207.574 289.013C205.666 292.064 210.481 294.521 212.429 291.641C221.065 278.631 228.993 265.208 235.898 251.175C242.606 237.457 248.512 223.383 254.189 209.254C265.777 180.528 276.2 151.278 288.819 122.963C295.975 106.891 304.306 91.4659 312.37 75.815C313.083 74.5342 311.345 73.71 310.563 74.7724Z"
        fill="#734061"
        fill-opacity="0.1"
      />
      <path
        d="M144.584 417.131C157.365 397.494 176.198 381.38 197.228 371.207C208.425 365.802 219.801 361.327 229.445 353.164C238.503 345.424 246.65 335.768 253.417 325.98C251.668 325.032 249.919 324.084 248.199 323.184C242.842 334.322 235.985 344.815 228.495 354.589C221.052 364.335 212.481 373.403 202.17 380.154C183.317 392.509 156.733 393.264 143.307 413.229C141.802 415.449 145.323 417.915 147.126 415.97C161.471 400.385 181.163 392.068 198.855 381.007C215.789 370.409 229.994 356.405 239.25 338.661C240.366 336.549 237.183 334.85 235.962 336.896C225.278 354.538 210.913 368.704 193.284 379.337C176.177 389.651 157.444 397.836 143.665 412.751C144.938 413.664 146.211 414.578 147.483 415.491C154.229 405.456 166.292 401.147 177.226 397.333C188.52 393.364 199.415 389.378 209.084 382.109C218.546 375.032 226.434 366.121 233.374 356.617C240.559 346.769 246.424 336.036 253.446 326.027C255.404 323.271 250.849 320.07 248.67 322.571C240.341 332.142 233.169 342.438 223.086 350.414C213.192 358.275 201.29 362.42 190.345 368.452C169.999 379.639 153.87 395.922 142.08 415.799C141.064 417.329 143.568 418.662 144.584 417.131Z"
        fill="#734061"
        fill-opacity="0.1"
      />
      <path
        d="M87.6281 552.683C110.471 506.293 107.638 452.561 103.52 402.474C98.7573 345.369 88.0651 289.413 73.2954 234.126C65.2684 204.047 57.2099 173.596 56.4251 142.281C56.3552 139.398 51.7627 138.69 51.2722 141.721C43.7773 190.249 37.3474 239.883 44.2359 288.864C47.8532 314.809 56.1403 339.138 65.1139 363.633C74.4869 389.315 81.5396 415.243 86.9427 441.984C89.9804 456.969 93.2757 472.057 95.0401 487.3C96.6942 501.83 95.8442 516.198 92.2901 530.396C94.0445 530.82 95.7989 531.245 97.5533 531.669C104.113 486.507 100.324 440.901 93.458 396.004C85.8885 346.334 76.5695 296.887 68.0398 247.348C63.0873 218.577 57.7165 189.867 54.5792 160.768C54.3433 158.571 50.9079 158.588 51.0964 160.814C55.3457 211.86 65.1562 262.112 74.1591 312.533C82.4953 359.198 92.3257 405.863 95.5663 453.234C97.2977 478.965 96.8324 504.931 92.3375 530.367C91.7548 533.779 96.5892 534.989 97.6006 531.64C100.972 519.699 102.332 507.23 101.732 494.853C101.069 481.734 98.5222 468.724 96.2809 455.788C91.6275 428.785 86.2533 402.093 77.0409 376.248C68.1097 351.076 57.6894 326.554 52.4992 300.269C47.7447 276.188 46.6022 251.528 47.393 227.053C48.3168 198.856 51.9737 170.876 56.3643 143.033C54.6309 142.856 52.9448 142.65 51.2114 142.473C51.8216 169.669 57.6614 196.272 64.3931 222.526C71.3113 249.512 78.3715 276.411 83.6849 303.856C89.1454 331.862 93.3326 360.124 96.2835 388.492C99.0114 415.11 101.066 442.009 100.492 468.757C99.9107 496.875 96.1905 525.284 84.2459 550.977C83.1298 553.089 86.5513 554.966 87.6281 552.683Z"
        fill="#734061"
        fill-opacity="0.1"
      />
      <path
        d="M-18.5676 706.724C-6.57864 695.373 4.14554 682.909 17.4597 673.09C30.5186 663.492 45.3729 657.154 60.0826 650.579C74.6975 644.062 89.3968 637.364 101.89 627.266C114.45 617.062 124.111 603.817 133.92 591.131C145.613 575.995 157.115 560.651 168.377 545.128C169.845 543.061 167.742 539.403 165.235 541.259C142.609 557.869 119.357 573.559 96.3652 589.677C73.8183 605.458 52.2969 622.173 33.4862 642.369C22.8966 653.776 12.9591 665.825 2.99271 677.826C4.07608 678.855 5.15945 679.884 6.29017 680.884C21.9471 660.207 43.7199 646.46 65.3979 632.77C87.7205 618.752 108.805 603.344 128.156 585.417C139.145 575.197 149.635 564.372 159.511 553.076C161.851 550.412 157.844 546.617 155.504 549.281C137.751 569.612 118.031 587.893 96.9381 604.672C76.6401 620.835 54.3204 634.006 33.5413 649.488C22.3663 657.806 11.7776 666.871 3.08746 677.768C1.33467 680.009 4.4322 683.059 6.38491 680.827C24.204 660.39 42.2519 640.009 62.7084 622.188C83.4675 604.118 106.388 588.629 128.801 572.735C141.767 563.519 154.744 554.426 167.961 545.512C166.904 544.206 165.876 542.948 164.819 541.643C154.836 555.215 144.643 568.655 134.287 581.935C124.27 594.812 114.564 608.41 102.42 619.4C78.2077 641.399 44.1825 647.218 18.0542 666.29C3.49023 676.937 -9.28883 690.721 -20.0164 705.202C-20.8928 706.323 -19.5597 707.654 -18.5676 706.724Z"
        fill="#734061"
        fill-opacity="0.1"
      />
    </svg>
  );
  return (
    <section id="services" className="relative p-28">
      <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
        <WineArrow />
      </Link>
      <div className=" container flex flex-col items-center justify-center">
        <div className=" row-auto">
          <h4
            className="tpurple-light text-5xl font-extralight"
            style={{ fontFamily: "AmsterdamOne" }}
          >
            Pioneros en terapia herbal
          </h4>
          <h5 className="tpurple text-4xl mt-6 flex items-center flex-col">
            Nuestros productos
          </h5>
        </div>
        <div className="row-auto mt-8 text-justify mb-48 flex flex-col items-center">
          <div className=" w-2/3">
            <p className=" text-3xl tpurple-light">
              Los productos Just se basan en recetas de bienestar que utilizan
              prácticas ancestrales con hierbas medicinales para atender
              necesidades cotidianas, con fórmulas originadas en los
              laboratorios Just en los Alpes Suizos con potentes componentes
              activos que brindan propiedades de bienestar y belleza
              extraordinarias.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0">{plantImg}</div>
    </section>
  );
};

export default Services;
