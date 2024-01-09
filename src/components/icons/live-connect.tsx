import { SVGIconProps } from '@/src/types/icons';
import { getInvertedPathFill, getPathFill } from '@/src/utils/icons';
import { FC } from 'react';

export const LiveConnectIcon: FC<SVGIconProps> = ({ width = 186, height = 187, variant, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 186 187" fill="none" {...props}>
      <g clipPath="url(#clip0_3162_28763)">
        <path
          d="M19.2817 91.7427C21.1998 92.4495 23.118 92.9039 25.0865 93.1058L24.5325 95.2767C22.1601 95.6301 19.7877 96.3875 17.4658 97.4477C12.1659 99.9216 6.61353 106.031 5.95735 113.25C4.69545 126.377 1.2126 133.345 1.2126 133.345C1.2126 133.345 9.59161 135.314 17.3144 141.928C23.5734 147.279 33.5677 147.229 39.5743 144.401C41.5933 143.442 43.4609 142.231 45.1266 140.867L45.8359 143.092C44.4226 145.061 43.2112 147.232 42.3531 149.656C40.3341 155.209 40.7379 163.439 45.3816 168.993C53.7606 179.141 56.234 186.562 56.234 186.562C56.234 186.562 63.6034 182.069 73.6986 181.261C81.8757 180.605 88.8919 173.537 91.1633 167.276C91.8195 165.459 92.2233 163.641 92.4756 161.773L94.7409 162.427C95.1447 164.699 95.8513 166.921 96.8608 169.092C99.3341 174.393 105.442 179.947 112.66 180.603C125.784 181.865 132.749 185.349 132.749 185.349C132.749 185.349 134.718 176.968 141.33 169.243C146.681 162.983 146.63 152.986 143.803 146.978C143.046 145.312 142.087 143.747 141.027 142.333L142.742 140.866C144.66 142.229 146.78 143.34 149.102 144.198C154.654 146.218 162.882 145.814 168.434 141.169C178.58 132.788 186 130.314 186 130.314C186 130.314 181.508 122.943 180.7 112.845C180.044 104.666 172.977 97.6485 166.718 95.3765C164.952 94.7202 163.134 94.3163 161.317 94.0638L161.83 91.7433C164.101 91.3394 166.372 90.6326 168.543 89.6228C173.843 87.1489 179.395 81.0399 180.051 73.8201C181.313 60.6933 184.796 53.7259 184.796 53.7259C184.796 53.7259 176.417 51.7569 168.694 45.143C162.435 39.7912 152.441 39.8417 146.434 42.6691C144.668 43.5273 143.053 44.4866 141.589 45.6478L140.422 43.6287C141.734 41.7607 142.794 39.6907 143.602 37.4692C145.621 31.9155 145.217 23.686 140.573 18.1323C132.194 7.98423 129.721 0.5625 129.721 0.5625C129.721 0.5625 122.351 5.05593 112.256 5.86373C104.079 6.52008 97.0628 13.5884 94.7914 19.8489C94.1352 21.6665 93.7313 23.484 93.479 25.3521L91.313 25.203C90.9597 22.7291 90.253 20.3057 89.1425 17.9832C86.6692 12.682 80.5617 7.1283 73.3436 6.47196C60.2199 5.20976 53.2542 1.72609 53.2542 1.72609C53.2542 1.72609 51.2856 10.1071 44.6733 17.8317C39.3228 24.0923 39.3734 34.0889 42.2 40.0969C43.0581 41.965 44.1181 43.6816 45.3295 45.1962L43.3082 46.3035C41.3901 44.8898 39.2702 43.7791 36.8979 42.9208C31.3455 40.9013 23.1179 41.3052 17.5656 45.9501C7.41993 54.3311 0 56.805 0 56.805C0 56.805 4.49229 64.1763 5.29991 74.2738C5.95609 82.4529 13.0227 89.4707 19.2817 91.7427Z"
          fill={getPathFill(variant, '#DEE6FC')}
        />
        <mask
          id="mask0_3162_28763"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="186"
          height="187"
        >
          <path
            d="M19.2817 91.7427C21.1998 92.4495 23.118 92.9039 25.0865 93.1058L24.5325 95.2767C22.1601 95.6301 19.7877 96.3875 17.4658 97.4477C12.1659 99.9216 6.61353 106.031 5.95735 113.25C4.69545 126.377 1.2126 133.345 1.2126 133.345C1.2126 133.345 9.59161 135.314 17.3144 141.928C23.5734 147.279 33.5677 147.229 39.5743 144.401C41.5933 143.442 43.4609 142.231 45.1266 140.867L45.8359 143.092C44.4226 145.061 43.2112 147.232 42.3531 149.656C40.3341 155.209 40.7379 163.439 45.3816 168.993C53.7606 179.141 56.234 186.562 56.234 186.562C56.234 186.562 63.6034 182.069 73.6986 181.261C81.8757 180.605 88.8919 173.537 91.1633 167.276C91.8195 165.459 92.2233 163.641 92.4756 161.773L94.7409 162.427C95.1447 164.699 95.8513 166.921 96.8608 169.092C99.3341 174.393 105.442 179.947 112.66 180.603C125.784 181.865 132.749 185.349 132.749 185.349C132.749 185.349 134.718 176.968 141.33 169.243C146.681 162.983 146.63 152.986 143.803 146.978C143.046 145.312 142.087 143.747 141.027 142.333L142.742 140.866C144.66 142.229 146.78 143.34 149.102 144.198C154.654 146.218 162.882 145.814 168.434 141.169C178.58 132.788 186 130.314 186 130.314C186 130.314 181.508 122.943 180.7 112.845C180.044 104.666 172.977 97.6485 166.718 95.3765C164.952 94.7202 163.134 94.3163 161.317 94.0638L161.83 91.7433C164.101 91.3394 166.372 90.6326 168.543 89.6228C173.843 87.1489 179.395 81.0399 180.051 73.8201C181.313 60.6933 184.796 53.7259 184.796 53.7259C184.796 53.7259 176.417 51.7569 168.694 45.143C162.435 39.7912 152.441 39.8417 146.434 42.6691C144.668 43.5273 143.053 44.4866 141.589 45.6478L140.422 43.6287C141.734 41.7607 142.794 39.6907 143.602 37.4692C145.621 31.9155 145.217 23.686 140.573 18.1323C132.194 7.98423 129.721 0.5625 129.721 0.5625C129.721 0.5625 122.351 5.05593 112.256 5.86373C104.079 6.52008 97.0628 13.5884 94.7914 19.8489C94.1352 21.6665 93.7313 23.484 93.479 25.3521L91.313 25.203C90.9597 22.7291 90.253 20.3057 89.1425 17.9832C86.6692 12.682 80.5617 7.1283 73.3436 6.47196C60.2199 5.20976 53.2542 1.72609 53.2542 1.72609C53.2542 1.72609 51.2856 10.1071 44.6733 17.8317C39.3228 24.0923 39.3734 34.0889 42.2 40.0969C43.0581 41.965 44.1181 43.6816 45.3295 45.1962L43.3082 46.3035C41.3901 44.8898 39.2702 43.7791 36.8979 42.9208C31.3455 40.9013 23.1179 41.3052 17.5656 45.9501C7.41993 54.3311 0 56.805 0 56.805C0 56.805 4.49229 64.1763 5.29991 74.2738C5.95609 82.4529 13.0227 89.4707 19.2817 91.7427Z"
            fill={getPathFill(variant, '#DEE6FC')}
          />
        </mask>
        <g mask="url(#mask0_3162_28763)">
          <path
            d="M137.615 67.4573C137.615 66.1521 137.65 64.8443 137.736 63.7065C137.824 62.5364 137.969 61.5192 138.198 60.8707C138.836 59.0685 139.567 57.7596 140.985 56.9711C141.009 56.8116 141.039 56.6651 141.076 56.5354C141.381 55.4824 141.884 54.2477 142.546 53.3136C143.195 52.3974 144.075 51.6688 145.129 51.8808C145.672 51.9899 146.054 52.3412 146.321 52.8419C146.582 53.3326 146.744 53.9848 146.857 54.7471C147.011 55.7934 147.08 57.1103 147.159 58.6067L147.159 58.6072L147.159 58.6083C147.194 59.286 147.232 60.0008 147.28 60.7437C147.435 63.1334 147.843 65.8514 148.256 68.0395C148.463 69.1331 148.671 70.0913 148.848 70.8071C148.873 70.9097 148.898 71.007 148.922 71.0988C149.264 68.6606 149.87 65.8001 150.226 64.1146L150.227 64.1139L150.227 64.1104L150.228 64.1069C150.316 63.6898 150.389 63.3449 150.439 63.097C150.619 62.2026 151.02 60.7802 151.552 59.5196C151.817 58.8895 152.12 58.2898 152.449 57.8141C152.771 57.3485 153.149 56.9566 153.582 56.8127C154.331 56.5639 155.001 56.6311 155.512 56.953C156.02 57.2735 156.33 57.8211 156.409 58.453C156.482 59.0424 156.452 60.5718 156.403 62.17C156.384 62.8068 156.361 63.4585 156.339 64.0756L156.339 64.0767L156.339 64.0798L156.338 64.0857L156.338 64.0864C156.305 65.0317 156.275 65.895 156.263 66.4981C156.25 67.223 156.344 68.8159 156.452 70.6408L156.452 70.6433C156.491 71.3016 156.531 71.9901 156.569 72.6789C156.64 73.9721 156.702 75.261 156.724 76.3377C156.745 77.4024 156.729 78.2926 156.633 78.7674C156.453 79.6655 156.032 80.9482 155.595 82.2794L155.574 82.3417C155.139 83.6646 154.687 85.0397 154.413 86.1839C154.214 87.0124 153.967 88.3104 153.699 89.7154L153.699 89.7161L153.699 89.7167L153.699 89.7185C153.589 90.2936 153.476 90.8869 153.362 91.4729C153.165 92.4785 152.965 93.4612 152.772 94.2881C152.58 95.1077 152.39 95.7971 152.211 96.202C152.028 96.6132 151.693 97.1036 151.224 97.7111C150.773 98.2947 150.183 99.0049 149.457 99.8793L149.353 100.005C147.803 101.872 145.637 104.49 142.829 108.256C140.033 112.006 138.331 115.405 137.351 118.034C136.86 119.349 136.551 120.469 136.375 121.344C136.198 122.228 136.161 122.839 136.199 123.144C136.237 123.453 136.391 123.917 136.637 124.5C136.88 125.076 137.2 125.742 137.554 126.445C137.833 126.999 138.134 127.578 138.432 128.151C138.884 129.021 139.328 129.877 139.678 130.608C140.249 131.807 151.776 156.811 152.923 159.911L152.984 160.076L152.864 160.204C150.87 162.314 141.998 168.886 132.037 168.285C132.028 168.284 132.019 168.284 132.011 168.282C131.958 168.275 131.91 168.254 131.871 168.223C131.838 168.197 131.811 168.163 131.793 168.125C131.785 168.108 130.915 169.031 131.774 168.072C131.348 166.557 124.337 142.885 123.686 140.71C123.031 138.524 122.408 136.552 122.094 135.812C121.909 135.378 121.629 134.849 121.302 134.23C120.252 132.245 118.712 129.335 118.255 125.656C117.655 120.821 118.973 115.194 119.574 113.114C119.878 112.062 120.834 109.364 122.246 106.326C123.657 103.291 125.534 99.8924 127.688 97.4586C130.057 94.7811 132.019 93.03 133.722 91.5635C133.618 89.0921 133.652 85.3995 133.774 81.9878C133.899 78.4902 134.119 75.2535 134.384 73.932C135.039 70.6713 136.589 68.7393 137.416 67.7079C137.488 67.6176 137.555 67.5341 137.615 67.4573Z"
            fill={getPathFill(variant, '#DEE6FC')}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M142.048 56.8147C142.334 55.8242 142.798 54.7058 143.372 53.8962C143.978 53.0409 144.51 52.7846 144.933 52.8695C145.104 52.9039 145.266 53.005 145.432 53.3153C145.61 53.6511 145.752 54.1653 145.86 54.8936C146.008 55.8916 146.072 57.1308 146.149 58.5957C146.185 59.2838 146.223 60.0218 146.274 60.8079C146.433 63.2528 146.848 66.0143 147.266 68.226C147.476 69.3331 147.687 70.3103 147.87 71.0486C147.961 71.4169 148.047 71.7326 148.123 71.9783C148.161 72.1007 148.199 72.2129 148.236 72.309C148.255 72.3569 148.279 72.4159 148.309 72.4769C148.265 72.9364 148.235 73.3676 148.226 73.7567C147.615 74.0143 147.056 74.3663 146.615 74.7465C145.78 75.4663 145.298 76.0545 144.667 77.0185C144.397 77.4308 144.096 77.9182 143.728 78.5134L143.57 78.7698C143.425 79.0029 143.27 79.2529 143.103 79.5221C142.958 78.6076 142.831 77.4953 142.832 76.4866C142.832 75.6596 142.871 74.525 142.911 73.3368L142.911 73.3362C142.926 72.9059 142.94 72.4686 142.954 72.0363C143.003 70.452 143.035 68.8824 142.939 68.1106C142.912 67.8953 142.863 67.5493 142.801 67.1067C142.646 66.0142 142.409 64.3331 142.216 62.5772C142.082 61.3535 141.973 60.1211 141.935 59.0727C141.895 57.9912 141.935 57.206 142.048 56.8147ZM141.966 81.3214C141.754 80.3977 141.377 78.3147 141.379 76.4853C141.379 75.6324 141.419 74.4595 141.46 73.2622L141.46 73.2619C141.474 72.8371 141.488 72.4092 141.501 71.9915C141.552 70.3545 141.575 68.9222 141.497 68.2895C141.474 68.1081 141.429 67.7913 141.371 67.3761L141.371 67.3761L141.371 67.3761L141.371 67.376C141.217 66.2853 140.967 64.5153 140.772 62.7355C140.636 61.4969 140.523 60.2253 140.483 59.1264C140.477 58.9732 140.472 58.8213 140.47 58.6715C139.946 59.2735 139.548 60.0908 139.152 61.2071C138.892 61.9417 138.732 63.4221 138.665 65.2352C138.599 67.0123 138.625 69.0057 138.693 70.6956C138.763 72.4325 138.69 74.7517 138.6 76.8994C138.576 77.469 138.552 78.0255 138.528 78.5568C138.461 80.0499 138.404 81.3442 138.403 82.1713C138.402 83.3536 138.678 84.7681 138.946 85.8214C139.916 84.5893 140.616 83.4683 141.277 82.4114L141.277 82.4114L141.277 82.4114L141.277 82.4112C141.477 82.0905 141.674 81.7757 141.873 81.4655L141.966 81.3214ZM137.783 60.7223C138.404 58.9657 139.145 57.57 140.585 56.6918C140.605 56.5921 140.627 56.4983 140.652 56.4111C140.965 55.3305 141.486 54.0448 142.186 53.0561C142.855 52.1131 143.886 51.1771 145.219 51.4448C145.925 51.5867 146.403 52.0479 146.714 52.6322C147.012 53.1911 147.183 53.9038 147.298 54.6811C147.455 55.7491 147.526 57.1009 147.605 58.6108C147.64 59.2841 147.677 59.9888 147.724 60.7139C147.878 63.0794 148.282 65.7782 148.694 67.956C148.746 68.232 148.799 68.4991 148.85 68.7556C148.887 68.5492 148.924 68.3438 148.962 68.1403C149.253 66.572 149.573 65.0584 149.795 64.0116C149.883 63.5946 149.956 63.2516 150.004 63.0088C150.19 62.0879 150.599 60.6368 151.143 59.3465C151.415 58.7019 151.731 58.0715 152.084 57.561C152.419 57.0762 152.867 56.5821 153.442 56.3909C154.29 56.1091 155.104 56.1707 155.748 56.5769C156.387 56.9794 156.757 57.6559 156.849 58.3975C156.927 59.0301 156.895 60.6041 156.847 62.1828C156.827 62.8275 156.803 63.4839 156.782 64.1035C156.748 65.0466 156.718 65.9043 156.707 66.5054C156.694 67.2118 156.786 68.774 156.893 70.5888C156.932 71.2531 156.973 71.9512 157.012 72.6536C157.083 73.9477 157.145 75.2431 157.167 76.3279C157.188 77.3822 157.175 78.3228 157.068 78.8538C156.881 79.7843 156.45 81.0968 156.016 82.4171L155.999 82.4679C155.561 83.7995 155.114 85.1603 154.844 86.2864C154.648 87.1048 154.404 88.3865 154.137 89.7869L154.137 89.787L154.136 89.7904C154.026 90.3672 153.913 90.9641 153.797 91.557C153.6 92.5638 153.399 93.5531 153.204 94.3883C153.013 95.2046 152.815 95.9326 152.616 96.3807C152.41 96.8451 152.046 97.3721 151.575 97.9814C151.119 98.5714 150.525 99.2872 149.802 100.158L149.694 100.287C148.146 102.152 145.985 104.764 143.184 108.52C140.413 112.237 138.732 115.598 137.766 118.188C137.283 119.483 136.981 120.581 136.81 121.431C136.635 122.302 136.61 122.856 136.639 123.088C136.669 123.331 136.801 123.747 137.046 124.327C137.282 124.889 137.598 125.544 137.951 126.244C138.223 126.786 138.522 127.361 138.819 127.932L138.819 127.932C139.274 128.81 139.727 129.68 140.078 130.416C140.655 131.625 143.4 137.935 144.553 141.049C144.693 141.425 144.5 141.843 144.124 141.983C143.748 142.122 143.33 141.93 143.19 141.554C142.055 138.486 139.327 132.217 138.766 131.042C138.422 130.32 137.994 129.498 137.551 128.644L137.55 128.644C137.252 128.069 136.946 127.48 136.653 126.898C136.296 126.189 135.963 125.499 135.707 124.891C135.458 124.303 135.254 123.726 135.197 123.267C135.138 122.797 135.202 122.056 135.385 121.145C135.573 120.211 135.898 119.039 136.405 117.68C137.419 114.961 139.166 111.479 142.019 107.652C144.843 103.865 147.023 101.231 148.576 99.3592L148.673 99.243L148.673 99.2428C149.406 98.3594 149.985 97.662 150.425 97.093C150.891 96.4896 151.159 96.0824 151.288 95.7922C151.423 95.4857 151.595 94.8843 151.789 94.0573C151.978 93.2492 152.175 92.2814 152.371 91.2786C152.482 90.7104 152.592 90.1288 152.701 89.5601C152.971 88.141 153.226 86.8014 153.431 85.9477C153.715 84.7625 154.178 83.3541 154.607 82.0496L154.607 82.0494L154.607 82.0493L154.607 82.0492L154.636 81.9632C155.082 80.6071 155.478 79.3924 155.644 78.5676C155.713 78.221 155.736 77.4457 155.714 76.3571C155.693 75.299 155.632 74.0247 155.561 72.7336C155.525 72.0768 155.486 71.412 155.448 70.7691L155.447 70.7619L155.447 70.7601L155.447 70.7557L155.447 70.7554L155.447 70.7552L155.447 70.7551L155.447 70.755C155.338 68.9087 155.24 67.2459 155.254 66.4786C155.265 65.8685 155.296 64.9878 155.33 64.0331L155.33 64.0299L155.33 64.0297L155.33 64.029C155.352 63.4118 155.375 62.7638 155.394 62.138C155.445 60.4954 155.468 59.0676 155.407 58.5765C155.359 58.1945 155.186 57.94 154.974 57.8063C154.767 57.6764 154.422 57.5965 153.901 57.7699C153.791 57.8063 153.571 57.9656 153.279 58.3877C153.005 58.7839 152.734 59.3139 152.482 59.9109C151.979 61.1037 151.597 62.4607 151.429 63.295C151.376 63.5581 151.301 63.9161 151.21 64.3454C150.988 65.3896 150.678 66.8558 150.391 68.4051C150.059 70.1962 149.774 72.0227 149.697 73.36C150.613 73.2575 151.603 73.4338 152.372 74.1838C153.079 74.8729 153.304 75.7819 153.3 76.6517C153.296 77.5157 153.069 78.4118 152.792 79.1951C152.427 80.2254 151.731 81.1046 151.117 81.8526L150.953 82.0519C150.376 82.7527 149.902 83.3274 149.642 83.9138C149.431 84.3914 149.166 85.1404 148.853 86.0245C148.691 86.4839 148.515 86.9797 148.328 87.4929C147.799 88.9395 147.176 90.5153 146.528 91.5233C145.343 93.3673 144.701 94.4882 143.946 95.8078C143.642 96.3373 143.293 97.3066 143.068 98.2633C142.956 98.7354 142.882 99.178 142.856 99.5366C142.843 99.7159 142.843 99.8611 142.853 99.971C142.863 100.074 142.878 100.116 142.878 100.12C142.879 100.12 142.879 100.12 142.878 100.12L142.878 100.119C143.051 100.481 142.897 100.914 142.535 101.087C142.173 101.26 141.739 101.107 141.566 100.744C141.382 100.357 141.377 99.8518 141.407 99.4324C141.44 98.9726 141.531 98.4498 141.653 97.9302C141.895 96.9036 142.284 95.7845 142.684 95.0857L142.685 95.0855L142.685 95.0854L142.685 95.0853L142.685 95.085C143.444 93.7592 144.1 92.6129 145.306 90.7376C145.853 89.8859 146.427 88.4608 146.963 86.9941C147.131 86.5351 147.295 86.0696 147.453 85.6235C147.781 84.697 148.08 83.8541 148.314 83.3253C148.66 82.5444 149.268 81.8095 149.814 81.1488L149.814 81.1488C149.875 81.0751 149.935 81.0022 149.994 80.9303C150.619 80.1697 151.153 79.47 151.422 78.7102C151.673 78.0017 151.844 77.2796 151.847 76.6453C151.85 76.0168 151.689 75.5474 151.358 75.2244C150.941 74.8182 150.33 74.6982 149.588 74.8464C148.843 74.995 148.086 75.3974 147.564 75.8471C146.853 76.4601 146.456 76.938 145.883 77.8142C145.624 78.2095 145.334 78.6788 144.964 79.2774L144.805 79.534C144.36 80.2542 143.811 81.1387 143.095 82.2512C142.907 82.5446 142.718 82.848 142.522 83.1618L142.521 83.1622C141.497 84.8038 140.297 86.7273 138.118 88.9619C137.145 89.9604 136.104 90.8522 134.981 91.8128L134.98 91.814C134.874 91.9051 134.767 91.9967 134.659 92.0891C134.574 92.2515 134.429 92.3784 134.252 92.4392C134.128 92.5459 134.003 92.6538 133.878 92.7631C132.314 94.1242 130.543 95.7543 128.444 98.1266C126.387 100.451 124.559 103.745 123.161 106.751C121.767 109.75 120.831 112.4 120.544 113.394C119.952 115.442 118.683 120.906 119.257 125.53C119.687 129 121.083 131.641 122.13 133.623C122.484 134.294 122.799 134.889 123.023 135.416C123.364 136.22 124.004 138.257 124.653 140.42C125.307 142.604 125.988 144.977 126.414 146.496C126.523 146.882 126.298 147.283 125.911 147.392C125.525 147.5 125.124 147.275 125.015 146.889C124.59 145.376 123.912 143.011 123.261 140.837C122.603 138.641 121.988 136.697 121.685 135.984C121.517 135.588 121.253 135.089 120.938 134.495C119.89 132.516 118.283 129.483 117.815 125.709C117.203 120.782 118.542 115.084 119.148 112.99C119.459 111.913 120.424 109.192 121.844 106.138C123.261 103.09 125.16 99.6457 127.355 97.1637C129.509 94.7297 131.33 93.0546 132.924 91.6671C133.041 91.5648 133.157 91.4644 133.271 91.3655C133.177 88.8817 133.213 85.2898 133.331 81.9709C133.457 78.4823 133.676 75.2073 133.95 73.8437C134.627 70.474 136.237 68.4681 137.068 67.4316C137.105 67.3858 137.141 67.3418 137.174 67.2998C137.176 66.5829 137.188 65.8675 137.213 65.1815C137.279 63.3931 137.438 61.6964 137.783 60.7223ZM137.205 69.6801C137.215 70.0482 137.227 70.4077 137.241 70.7542C137.309 72.4232 137.238 74.6857 137.148 76.8389C137.125 77.3881 137.101 77.9312 137.078 78.4548L137.078 78.4557L137.078 78.4559L137.078 78.4561C137.011 79.9634 136.951 81.3086 136.95 82.17C136.948 83.9533 137.484 86.098 137.813 87.1641C137.582 87.4204 137.337 87.6814 137.078 87.9477C136.33 88.7151 135.549 89.4079 134.69 90.1476C134.643 87.8218 134.683 84.8332 134.784 82.023C134.91 78.5052 135.129 75.3554 135.375 74.1299C135.771 72.1593 136.512 70.7231 137.205 69.6801Z"
            fill="#291900"
          />
          <path
            d="M48.3331 67.4573C48.3332 66.1521 48.2986 64.8443 48.2126 63.7065C48.1241 62.5364 47.9794 61.5192 47.7499 60.8707C47.112 59.0685 46.3814 57.7596 44.9629 56.9711C44.9394 56.8116 44.9096 56.6651 44.8721 56.5354C44.5677 55.4824 44.0639 54.2477 43.402 53.3136C42.7528 52.3974 41.8737 51.6688 40.8188 51.8808C40.2758 51.9899 39.8942 52.3412 39.6275 52.8419C39.3661 53.3326 39.2042 53.9848 39.0915 54.7471C38.9368 55.7934 38.8679 57.1103 38.7897 58.6067L38.7896 58.6072L38.7896 58.6083C38.7541 59.286 38.7167 60.0008 38.6686 60.7437C38.5137 63.1334 38.1056 65.8514 37.6919 68.0395C37.4851 69.1331 37.2775 70.0913 37.1003 70.8071C37.0749 70.9097 37.0502 71.007 37.0263 71.0988C36.6844 68.6606 36.0787 65.8001 35.7218 64.1146L35.7216 64.1139L35.7209 64.1104L35.7201 64.1069C35.6318 63.6898 35.5588 63.3449 35.509 63.097C35.3293 62.2026 34.9278 60.7802 34.3964 59.5196C34.1308 58.8895 33.8286 58.2898 33.4996 57.8141C33.1775 57.3485 32.7993 56.9566 32.3661 56.8127C31.6177 56.5639 30.9473 56.6311 30.4364 56.953C29.9278 57.2735 29.6179 57.8211 29.5395 58.453C29.4663 59.0424 29.4958 60.5718 29.5451 62.17C29.5647 62.8068 29.5877 63.4585 29.6095 64.0756L29.6095 64.0767L29.6096 64.0798L29.6099 64.0857L29.6099 64.0864C29.6433 65.0317 29.6737 65.895 29.6848 66.4981C29.6982 67.223 29.6042 68.8159 29.4966 70.6408L29.4965 70.6433C29.4576 71.3016 29.417 71.9901 29.3791 72.6789C29.3077 73.9721 29.2461 75.261 29.2244 76.3377C29.203 77.4024 29.2195 78.2926 29.3149 78.7674C29.4953 79.6655 29.9157 80.9482 30.3535 82.2794L30.374 82.3417C30.809 83.6646 31.2613 85.0397 31.5356 86.1839C31.7342 87.0124 31.9814 88.3104 32.2491 89.7154L32.2492 89.7161L32.2493 89.7167L32.2497 89.7185C32.3592 90.2936 32.4722 90.8869 32.5866 91.4729C32.7829 92.4785 32.9832 93.4612 33.1766 94.2881C33.3683 95.1077 33.5583 95.7971 33.7376 96.202C33.9198 96.6132 34.2551 97.1036 34.7244 97.7111C35.1753 98.2947 35.7649 99.0049 36.4908 99.8793L36.5951 100.005C38.145 101.872 40.3117 104.49 43.1194 108.256C45.9155 112.006 47.6173 115.405 48.5977 118.034C49.088 119.349 49.3973 120.469 49.5731 121.344C49.7506 122.228 49.7875 122.839 49.7496 123.144C49.7113 123.453 49.5569 123.917 49.3112 124.5C49.0686 125.076 48.7478 125.742 48.3939 126.445C48.1149 126.999 47.8141 127.578 47.5165 128.151C47.0644 129.021 46.6198 129.877 46.2707 130.608C45.6988 131.807 36.0698 154.42 34.9222 157.52L34.8612 157.685L34.9819 157.813C36.9755 159.923 46.4979 163.508 56.4589 162.906C56.4679 162.906 56.4768 162.905 56.4857 162.904C56.5382 162.897 56.5859 162.876 56.6249 162.845C56.6581 162.818 56.6851 162.785 56.7036 162.746C56.7117 162.73 57.2985 162.906 56.7228 162.694C57.1484 161.179 61.6107 142.885 62.2624 140.71C62.9176 138.524 63.5399 136.552 63.8547 135.812C64.039 135.378 64.3189 134.849 64.6464 134.23C65.6964 132.245 67.2366 129.335 67.6932 125.656C68.2932 120.821 66.9755 115.194 66.3742 113.114C66.0701 112.062 65.1143 109.364 63.7022 106.326C62.2913 103.291 60.4138 99.8924 58.2604 97.4586C55.8914 94.7811 53.9296 93.03 52.2258 91.5635C52.3304 89.0921 52.2966 85.3995 52.1743 81.9878C52.0489 78.4902 51.8294 75.2535 51.5639 73.932C50.9088 70.6713 49.3597 68.7393 48.5327 67.7079C48.4603 67.6176 48.3934 67.5341 48.3331 67.4573Z"
            fill={getPathFill(variant, '#DEE6FC')}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.9001 56.8147C43.6138 55.8242 43.1499 54.7058 42.5762 53.8962C41.9701 53.0409 41.4383 52.7846 41.0156 52.8695C40.8443 52.9039 40.6819 53.005 40.5166 53.3153C40.3378 53.6511 40.1959 54.1653 40.0882 54.8936C39.9407 55.8915 39.876 57.1307 39.7995 58.5955L39.7995 58.5957L39.7995 58.5958L39.7995 58.596L39.7995 58.5963C39.7635 59.2843 39.725 60.022 39.6741 60.8079C39.5156 63.2528 39.1001 66.0143 38.6819 68.226C38.4725 69.3331 38.261 70.3103 38.0783 71.0486C37.9871 71.4169 37.9014 71.7326 37.8251 71.9783C37.787 72.1007 37.7491 72.2129 37.7118 72.309C37.6932 72.3569 37.6691 72.4159 37.639 72.4769C37.6836 72.9364 37.7128 73.3676 37.7222 73.7567C38.333 74.0143 38.8922 74.3663 39.3331 74.7465C40.1681 75.4663 40.6505 76.0545 41.2814 77.0185C41.5513 77.4308 41.8525 77.9182 42.2202 78.5134L42.3787 78.7698C42.5229 79.0029 42.6778 79.2529 42.8455 79.5221C42.9901 78.6076 43.1175 77.4953 43.1166 76.4866C43.1159 75.6596 43.0775 74.525 43.0372 73.3368C43.0227 72.9063 43.0079 72.4688 42.9945 72.0363C42.9456 70.452 42.9137 68.8824 43.0095 68.1106C43.0362 67.8954 43.0851 67.5497 43.1476 67.1074L43.1476 67.1067L43.1477 67.1066L43.1477 67.1064C43.302 66.0139 43.5395 64.333 43.732 62.5772C43.8661 61.3535 43.9749 60.1211 44.0136 59.0727C44.0535 57.9912 44.0133 57.206 43.9001 56.8147ZM43.9826 81.3214C44.1941 80.3977 44.5713 78.3147 44.5697 76.4853C44.569 75.6324 44.5293 74.4595 44.4887 73.2622L44.4887 73.2619C44.4743 72.8371 44.4598 72.4092 44.447 71.9915C44.3965 70.3545 44.3731 68.9222 44.4516 68.2895C44.4741 68.1082 44.5188 67.7915 44.5774 67.3765L44.5774 67.3761C44.7314 66.2854 44.9813 64.5154 45.1765 62.7355C45.3122 61.4969 45.4251 60.2253 45.4657 59.1264C45.4714 58.9732 45.4758 58.8213 45.4785 58.6715C46.0019 59.2735 46.4007 60.0908 46.7958 61.2071C47.0558 61.9417 47.216 63.4221 47.283 65.2352C47.3488 67.0123 47.3231 69.0057 47.2549 70.6956C47.1848 72.4325 47.2585 74.7517 47.3481 76.8994C47.3718 77.469 47.3966 78.0255 47.4203 78.5568L47.4203 78.5569C47.4868 80.05 47.5445 81.3442 47.5452 82.1713C47.5463 83.3536 47.2701 84.7681 47.0022 85.8214C46.0322 84.5893 45.332 83.4684 44.6717 82.4114L44.6717 82.4114L44.6716 82.4114L44.6715 82.4112C44.4712 82.0905 44.2745 81.7757 44.0751 81.4655L43.9826 81.3214ZM48.1657 60.7223C47.5439 58.9657 46.803 57.57 45.363 56.6918C45.3435 56.5921 45.3213 56.4983 45.2961 56.4111C44.9837 55.3305 44.4625 54.0448 43.7618 53.0561C43.0936 52.1131 42.062 51.1771 40.7294 51.4448C40.0231 51.5867 39.5453 52.0479 39.2341 52.6322C38.9364 53.1911 38.7656 53.9038 38.6507 54.6811C38.4929 55.7491 38.4221 57.1008 38.3431 58.6106L38.3431 58.6108C38.3079 59.2841 38.271 59.9888 38.224 60.7139C38.0707 63.0794 37.6659 65.7782 37.2541 67.956C37.2019 68.232 37.1497 68.4991 37.098 68.7556C37.0612 68.5492 37.0238 68.3438 36.9861 68.1403C36.6955 66.572 36.3751 65.0584 36.1534 64.0116C36.0651 63.5946 35.9925 63.2516 35.9437 63.0088C35.7587 62.0879 35.349 60.6368 34.805 59.3465C34.5333 58.7019 34.2174 58.0715 33.8643 57.561C33.5289 57.0762 33.0812 56.5821 32.506 56.3909C31.6579 56.1091 30.8446 56.1707 30.1999 56.5769C29.5611 56.9794 29.1913 57.6559 29.0993 58.3975C29.0208 59.0301 29.053 60.6041 29.1017 62.1828C29.1216 62.8275 29.1448 63.4839 29.1667 64.1035C29.2 65.0466 29.2303 65.9043 29.2414 66.5054C29.2544 67.2118 29.1623 68.774 29.0553 70.5888C29.0161 71.2531 28.9749 71.9512 28.9362 72.6536C28.8648 73.9477 28.8028 75.2431 28.781 76.3279C28.7598 77.3822 28.7733 78.3228 28.88 78.8538C29.0669 79.7843 29.498 81.0968 29.9322 82.4171L29.9489 82.4679C30.3868 83.7995 30.8343 85.1603 31.1043 86.2864C31.3004 87.1048 31.5446 88.3865 31.8113 89.7869L31.8113 89.787L31.812 89.7904C31.9218 90.3672 32.0355 90.9641 32.1513 91.557C32.3478 92.5638 32.5494 93.5531 32.7447 94.3883C32.9357 95.2046 33.1336 95.9326 33.3321 96.3807C33.5378 96.8451 33.9027 97.3721 34.3735 97.9814C34.8293 98.5714 35.4236 99.2872 36.1465 100.158L36.2539 100.287C37.8022 102.152 39.963 104.764 42.7638 108.52C45.5349 112.237 47.2164 115.598 48.1821 118.188C48.6652 119.483 48.9676 120.581 49.1382 121.431C49.3133 122.302 49.3383 122.856 49.3095 123.088C49.2793 123.331 49.147 123.747 48.9025 124.327C48.6658 124.889 48.3503 125.544 47.9977 126.244C47.7249 126.786 47.4265 127.361 47.1297 127.932L47.1296 127.932C46.6738 128.81 46.2216 129.68 45.8704 130.416C45.2936 131.625 42.5479 137.935 41.395 141.049C41.2557 141.425 41.4478 141.843 41.8241 141.983C42.2005 142.122 42.6185 141.93 42.7578 141.554C43.8934 138.486 46.6213 132.217 47.1818 131.042C47.5263 130.32 47.9539 129.498 48.3976 128.644L48.3977 128.644C48.6966 128.069 49.0027 127.48 49.2956 126.898C49.6527 126.189 49.9856 125.499 50.2416 124.891C50.4898 124.303 50.6946 123.726 50.7515 123.267C50.8099 122.797 50.746 122.056 50.5629 121.145C50.3754 120.211 50.0504 119.039 49.5436 117.68C48.5297 114.961 46.782 111.479 43.9288 107.652C41.1053 103.865 38.9254 101.231 37.3719 99.3592L37.2755 99.243L37.2753 99.2428C36.542 98.3594 35.963 97.662 35.5233 97.093C35.0572 96.4896 34.7892 96.0824 34.6607 95.7922C34.525 95.4857 34.3531 94.8843 34.1597 94.0573C33.9706 93.2492 33.7733 92.2814 33.5775 91.2786C33.4666 90.7104 33.3558 90.1288 33.2475 89.5601C32.9772 88.141 32.722 86.8014 32.5173 85.9477C32.2332 84.7624 31.77 83.354 31.3409 82.0494L31.3409 82.0493L31.3409 82.0492L31.3126 81.9632C30.8666 80.6071 30.4704 79.3924 30.3047 78.5676C30.235 78.221 30.2119 77.4457 30.2338 76.3571C30.2551 75.299 30.3159 74.0247 30.3871 72.7336C30.4233 72.0768 30.4626 71.412 30.5005 70.7691L30.5009 70.7619L30.501 70.7601L30.5013 70.7557L30.5013 70.7554L30.5013 70.7552L30.5013 70.755L30.5013 70.755C30.6103 68.9087 30.7084 67.2459 30.6942 66.4786C30.683 65.8678 30.6519 64.9859 30.6181 64.0299L30.6181 64.0298L30.6181 64.0297L30.6181 64.0291L30.618 64.0242C30.5962 63.4085 30.5734 62.7622 30.5542 62.138C30.5035 60.4954 30.4804 59.0676 30.5414 58.5765C30.5888 58.1945 30.7624 57.94 30.9746 57.8063C31.1808 57.6764 31.526 57.5965 32.0477 57.7699C32.1573 57.8063 32.3772 57.9656 32.6692 58.3877C32.9433 58.7839 33.2143 59.3139 33.466 59.9109C33.9688 61.1037 34.3515 62.4607 34.5191 63.295C34.5719 63.5581 34.6477 63.9161 34.7386 64.3454L34.7387 64.3454C34.9598 65.3896 35.2702 66.8559 35.5573 68.4051C35.8891 70.1962 36.1744 72.0227 36.2517 73.36C35.3356 73.2575 34.3456 73.4338 33.5761 74.1838C32.8691 74.8728 32.6444 75.7819 32.6483 76.6517C32.652 77.5157 32.879 78.4118 33.1562 79.1951C33.5209 80.2254 34.2168 81.1046 34.8311 81.8526L34.9951 82.0519L34.9952 82.052L34.9952 82.052C35.5725 82.7527 36.0461 83.3275 36.3058 83.9138C36.5173 84.3914 36.7823 85.1404 37.0951 86.0245C37.2577 86.4839 37.4331 86.9797 37.6207 87.4929C38.1493 88.9395 38.7721 90.5153 39.4201 91.5233C40.6053 93.3673 41.2471 94.4882 42.0027 95.8078C42.3059 96.3373 42.6555 97.3066 42.8807 98.2633C42.9919 98.7354 43.0663 99.178 43.0921 99.5366C43.105 99.7159 43.1048 99.8611 43.0949 99.971C43.0844 100.089 43.0662 100.127 43.0703 100.119C42.8975 100.481 43.051 100.914 43.4131 101.087C43.7753 101.26 44.209 101.107 44.3818 100.744C44.5667 100.357 44.5717 99.8518 44.5415 99.4324C44.5084 98.9726 44.4175 98.4498 44.2952 97.9302C44.0534 96.9036 43.6638 95.7845 43.2638 95.0857L43.2636 95.0855L43.2635 95.0853C42.5043 93.7594 41.8479 92.6131 40.6425 90.7376C40.095 89.8859 39.5215 88.4608 38.9855 86.9941C38.8177 86.5351 38.6529 86.0696 38.495 85.6235C38.167 84.697 37.8686 83.8541 37.6344 83.3253C37.2885 82.5444 36.6807 81.8095 36.1343 81.1488L36.1328 81.147L36.1295 81.143C36.0701 81.0712 36.0115 81.0003 35.954 80.9303C35.3293 80.1697 34.795 79.47 34.5261 78.7102C34.2753 78.0017 34.1042 77.2796 34.1014 76.6453C34.0986 76.0168 34.2589 75.5474 34.5903 75.2244C35.0071 74.8182 35.618 74.6982 36.3607 74.8464C37.1054 74.995 37.8627 75.3973 38.3843 75.8471C39.0954 76.4601 39.4921 76.938 40.0655 77.8142C40.3241 78.2092 40.6138 78.6782 40.9834 79.2763L40.9837 79.2766L40.9837 79.2767L40.9841 79.2773L40.9842 79.2774L41.1428 79.534C41.5881 80.2542 42.1377 81.1387 42.8527 82.2512C43.0414 82.5447 43.2309 82.8483 43.4268 83.1622L43.4268 83.1623L43.4268 83.1623C44.4513 84.8039 45.6517 86.7273 47.8298 88.9619C48.803 89.9604 49.8447 90.8522 50.9668 91.8128C51.0736 91.9042 51.1812 91.9963 51.2895 92.0891C51.3747 92.2515 51.5197 92.3784 51.6967 92.4392C51.8204 92.5459 51.945 92.6538 52.0706 92.7631C53.6342 94.1242 55.4055 95.7543 57.5044 98.1266C59.5611 100.451 61.3897 103.745 62.7869 106.751C64.1813 109.75 65.1173 112.4 65.4045 113.394C65.9966 115.442 67.2654 120.906 66.6915 125.53C66.2609 129 64.8653 131.641 63.8183 133.623C63.4638 134.294 63.1493 134.889 62.9257 135.416C62.5838 136.22 61.9437 138.257 61.2955 140.42C60.6408 142.604 59.9606 144.977 59.5339 146.496C59.4254 146.882 59.6506 147.283 60.0369 147.392C60.4233 147.5 60.8244 147.275 60.9329 146.889C61.358 145.376 62.0358 143.011 62.6875 140.837C63.3457 138.641 63.9602 136.697 64.2631 135.984C64.4311 135.588 64.6956 135.089 65.0104 134.495C66.0585 132.516 67.6652 129.483 68.1336 125.709C68.745 120.782 67.4058 115.084 66.8005 112.99C66.489 111.913 65.5244 109.192 64.1046 106.138C62.6877 103.09 60.7887 99.6457 58.5927 97.1637C56.4392 94.7297 54.6186 93.0546 53.0247 91.6671C52.9072 91.5648 52.7913 91.4644 52.6768 91.3655C52.7714 88.8817 52.7357 85.2898 52.6168 81.9709C52.4917 78.4823 52.2719 75.2073 51.998 73.8437C51.3209 70.474 49.7114 68.4681 48.8797 67.4316C48.843 67.3858 48.8077 67.3418 48.7741 67.2998C48.7726 66.5829 48.7606 65.8675 48.7352 65.1815C48.669 63.3931 48.5104 61.6964 48.1657 60.7223ZM48.7431 69.6801C48.7331 70.0482 48.7208 70.4077 48.7068 70.7542C48.6395 72.4232 48.7102 74.6857 48.8 76.8389C48.8229 77.3881 48.8471 77.9312 48.8704 78.4548L48.8704 78.4557L48.8705 78.4559L48.8705 78.4561C48.9376 79.9634 48.9976 81.3086 48.9984 82.17C48.9999 83.9533 48.4645 86.098 48.1351 87.1641C48.3663 87.4204 48.6109 87.6814 48.8704 87.9477C49.6184 88.7151 50.3994 89.4079 51.2579 90.1476C51.3052 87.8218 51.2653 84.8332 51.1646 82.023C51.0384 78.5052 50.8195 75.3554 50.5733 74.1299C50.1774 72.1593 49.4366 70.7231 48.7431 69.6801Z"
            fill="#291900"
          />
          <path
            d="M133.122 73.404C133.122 73.404 135.573 73.9886 135.728 74.2321C135.882 74.4604 134.389 74.9963 132.666 75.7577C130.942 76.519 129.61 77.3438 128.124 80.2274C126.639 83.1111 124.084 87.3119 115.479 86.6656C106.89 86.0175 106.779 85.6002 104.285 86.4939C101.808 87.3858 99.0616 88.8759 97.9321 88.5115C96.7868 88.1488 97.3808 87.0229 97.3808 87.0229C97.3808 87.0229 95.355 87.373 94.9931 86.4312C94.6296 85.4743 95.7742 84.1179 95.7742 84.1179C95.7742 84.1179 94.0509 84.3112 93.9199 83.1439C93.789 81.9767 96.7994 82.2683 98.9001 82.5852C101.001 82.9021 106.308 80.6949 107.577 77.59C107.577 77.59 105.989 77.277 106.445 75.4913C106.445 75.4913 104.534 74.5851 105.55 71.5087C105.55 71.5087 104.093 69.5078 105.709 67.2235C105.709 67.2235 104.815 65.5279 106.262 63.4467C106.262 63.4467 105.925 61.0132 107.174 59.4455C107.174 59.4455 106.065 56.9759 107.275 55.7809C108.502 54.5841 109.121 59.5341 111.773 61.3395C114.425 63.1449 115.837 64.1685 116.605 65.8783C116.605 65.8783 116.794 63.5699 118.244 63.223C118.244 63.223 117.984 60.9036 119.624 59.9675C119.624 59.9675 118.926 58.3113 120.088 57.2599C120.088 57.2599 119.225 54.1332 120.442 53.5668C121.675 52.9987 124.091 60.8324 124.848 64.585C125.59 68.3393 122.406 72.7796 122.819 73.6082C122.819 73.6082 124.068 74.3276 125.719 72.9144C127.349 71.4576 131.021 70.232 133.122 73.404Z"
            fill={getInvertedPathFill(variant)}
          />
          <path
            d="M70.4792 46.4515C70.4792 46.4515 71.9155 46.8325 72.0076 47.0255C72.0997 47.2185 70.3941 47.9137 70.0482 48.3157C69.7023 48.7176 69.731 51.9085 66.1527 53.5623C62.5722 55.2112 62.5445 54.2766 61.0744 55.2149C59.6092 56.1509 56.8837 61.8463 56.2205 62.2219C55.5622 62.5952 55.5168 61.3729 55.553 60.8226C55.553 60.8226 54.452 60.5185 54.791 59.2254C54.791 59.2254 53.7414 58.7784 54.1951 57.8511C54.1951 57.8511 53.4013 57.8152 53.6117 57.004C53.8222 56.1928 57.3127 55.3569 58.3865 53.7132C58.3865 53.7132 55.1808 53.6432 52.9615 52.5102C50.7422 51.3773 49.591 49.9658 49.6975 49.5004C49.804 49.0349 50.3545 49.1869 50.3545 49.1869C50.3545 49.1869 48.208 47.4802 48.3924 46.9776C48.5768 46.475 49.1273 46.627 49.1273 46.627C49.1273 46.627 48.0908 45.5814 48.4627 44.9834C48.8369 44.3903 49.2387 44.7317 49.2387 44.7317C49.2387 44.7317 47.7316 43.0753 48.7385 42.1804C49.7454 41.2854 50.6841 42.6146 50.6841 42.6146C50.6841 42.6146 50.5822 41.7747 51.3326 41.5944C52.083 41.4141 53.4069 45.0534 55.3598 46.1416C57.3154 47.2226 59.1154 47.4894 59.1154 47.4894C59.1154 47.4894 58.2863 44.5618 58.8097 44.1937C59.3379 43.8232 59.6319 44.6899 59.6319 44.6899C59.6319 44.6899 59.523 42.9589 60.3556 42.3248C61.1882 41.6907 61.2875 42.6503 61.2875 42.6503C61.2875 42.6503 62.3006 40.2655 63.1789 39.965C64.0522 39.6668 64.1798 40.4353 64.1798 40.4353C64.1798 40.4353 65.8607 38.5612 66.7436 39.0344C67.6242 39.5029 65.3491 41.2457 65.4886 43.6671C65.6281 46.0884 66.6366 46.324 67.0233 46.258C67.4198 46.1873 68.299 44.5239 70.4792 46.4515Z"
            fill={getInvertedPathFill(variant)}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3162_28763">
          <rect width="186" height="186" fill="white" transform="translate(0 0.5625)" />
        </clipPath>
      </defs>
    </svg>
  );
};