import { SVGIconProps } from '@/src/types/icons';
import { getPathFill } from '@/src/utils/icons';
import { FC } from 'react';

export const TwitterIcon: FC<SVGIconProps> = ({ width = 13, height = 13, variant, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 13 13" fill="none" {...props}>
      <g clipPath="url(#clip0_3162_28833)">
        <path
          d="M0.0263672 0.0128709C0.0263672 0.0283164 0.328999 0.46594 0.889525 1.26139C1.06584 1.50851 1.2711 1.80198 1.34742 1.91267C1.42374 2.02079 1.6711 2.37089 1.89479 2.6901C2.11847 3.00673 2.51058 3.56277 2.76321 3.92574C3.01584 4.28871 3.26321 4.63881 3.31058 4.70574C3.35795 4.77267 3.64216 5.17683 3.94216 5.60416C4.24216 6.03149 4.61058 6.55663 4.76321 6.77287C4.91584 6.98911 5.04742 7.17961 5.06058 7.19762C5.0711 7.21822 4.92374 7.40614 4.63952 7.72792C4.40005 8.00079 4.07637 8.36891 3.92374 8.54396C3.7711 8.72159 3.51058 9.01762 3.34742 9.2004C3.18163 9.38574 2.99216 9.60198 2.92374 9.67921C2.85531 9.75644 2.53952 10.1168 2.22374 10.4772C1.90531 10.8376 1.429 11.3834 1.16058 11.6871C0.894788 11.9909 0.59742 12.3281 0.502683 12.4337C0.265841 12.6962 0.0658409 12.9279 0.0421567 12.9665C0.0263672 12.9923 0.142157 13 0.584262 13H1.14479L1.30268 12.8147C1.38952 12.7143 1.58426 12.4903 1.73689 12.3204C2.08163 11.9317 2.91584 10.9869 3.09479 10.7758C3.16847 10.6883 3.51584 10.2945 3.86584 9.89802C4.21584 9.50159 4.74216 8.90178 5.03426 8.56713C5.32637 8.23248 5.5711 7.95703 5.579 7.95703C5.59216 7.95703 5.84479 8.31485 7.15268 10.176C7.40795 10.5416 7.85268 11.1723 8.13689 11.579C8.42373 11.9857 8.76321 12.4671 8.89216 12.6525L9.12637 12.9871L11.0501 12.9949C12.1079 12.9974 12.9737 12.9923 12.9737 12.9846C12.9737 12.9717 12.4422 12.2071 12.1448 11.7901C12.1 11.7257 11.9316 11.4889 11.7764 11.2624C11.5316 10.9123 11.0869 10.2816 10.7895 9.85941C10.7448 9.79505 10.4948 9.44238 10.2369 9.07426C9.979 8.70614 9.73163 8.35347 9.68689 8.28911C9.5211 8.05743 8.87373 7.13584 8.65531 6.82178C8.53163 6.64416 8.27374 6.27604 8.08163 6.00574L7.73426 5.50891L7.87373 5.34416C7.95005 5.25406 8.33426 4.81644 8.72373 4.37624C9.11584 3.93347 9.47637 3.52158 9.52637 3.46238C9.57637 3.40317 9.90795 3.02475 10.2632 2.62317C10.6158 2.22158 11.1237 1.64238 11.3922 1.33861C11.6579 1.03485 11.9185 0.738812 11.9711 0.679604C12.0237 0.62297 12.0948 0.543168 12.1316 0.499406C12.1685 0.458218 12.2632 0.347525 12.3422 0.257426C12.4211 0.164752 12.5027 0.0695047 12.5237 0.0437621C12.5579 0.002574 12.529 0 11.9948 0H11.429L11.0211 0.468515C10.5132 1.0503 10.1132 1.50594 9.72637 1.94357C9.56321 2.12634 9.32373 2.39921 9.19479 2.54852C9.06847 2.69782 8.83689 2.95782 8.68426 3.1303C8.44479 3.40059 7.49216 4.48436 7.31058 4.69545C7.27374 4.73663 7.23426 4.76495 7.2211 4.75465C7.20531 4.74693 7.03426 4.51267 6.83952 4.23465C6.48689 3.7301 5.98952 3.02218 4.96584 1.56515C4.66321 1.13525 4.29216 0.607525 4.14216 0.391287L3.86584 0H1.94742C0.889525 0 0.0263672 0.0051481 0.0263672 0.0128709ZM3.43952 0.996238C3.58426 1.20218 4.94216 3.10713 5.35005 3.67604C5.81584 4.32733 6.03426 4.63366 6.72374 5.59901C7.12637 6.16535 7.48952 6.67505 7.53163 6.73168C7.64216 6.88099 7.79479 7.09208 8.71058 8.37921C9.16321 9.01505 9.56847 9.58396 9.61058 9.6406C9.70268 9.76416 9.75795 9.84139 10.6922 11.1491C11.0922 11.7103 11.4211 12.1762 11.4211 12.1865C11.4211 12.1943 11.0264 12.202 10.5448 12.202H9.66847L9.51584 11.9883C9.43163 11.8725 9.24216 11.6022 9.08952 11.3911C8.65268 10.7733 8.5711 10.6626 8.47373 10.5287C8.42373 10.4592 8.23952 10.2044 8.06584 9.9598C7.69216 9.43466 7.62637 9.33941 7.13163 8.64951C6.60531 7.91069 6.50005 7.76396 6.39479 7.6198C6.34479 7.5503 6.12637 7.24396 5.90795 6.93762C5.69216 6.63386 5.23689 5.99802 4.90005 5.52693C4.56321 5.05842 4.25268 4.62594 4.21321 4.56931C4.09216 4.39426 3.48952 3.55248 2.84479 2.65148C1.70795 1.06317 1.579 0.880396 1.579 0.86495C1.579 0.857228 1.97374 0.849505 2.45795 0.849505H3.33426L3.43952 0.996238Z"
          fill={getPathFill(variant)}
        />
        <path d="M3.59416 0.672415H1.1471L9.4824 12.4023H12.0059L3.59416 0.672415Z" fill={getPathFill(variant)} />
      </g>
      <defs>
        <clipPath id="clip0_3162_28833">
          <rect width="13" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
