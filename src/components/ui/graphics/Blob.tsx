import React from 'react'

interface Props {
  readonly pattern: 'first' | 'second'
  readonly className?: string
}

const FIRST_PATTERN = (className: string) => (
  <svg
    className={className}
    width="795"
    height="649"
    viewBox="0 0 795 649"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5479 185.659C28.1524 55.7288 160.968 5.27312 233.048 0.659452C412.714 -10.8406 483.058 131.054 571.042 193.3C613.714 223.49 915.042 248.8 739.892 523.3C633.432 690.149 372.714 658.159 233.048 608.159C55.3681 544.551 -26.4453 400.019 7.5479 185.659Z"
      fill="#FFF7AD"
      fillOpacity="0.8"
    />
    <path
      d="M7.5479 185.659C28.1524 55.7288 160.968 5.27312 233.048 0.659452C412.714 -10.8406 483.058 131.054 571.042 193.3C613.714 223.49 915.042 248.8 739.892 523.3C633.432 690.149 372.714 658.159 233.048 608.159C55.3681 544.551 -26.4453 400.019 7.5479 185.659Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient id="paint0_linear" x1="249" y1="-19.5" x2="551.5" y2="659.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF3F0" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const SECOND_PATTERN = (className: string) => (
  <svg
    className={className}
    width="604"
    height="478"
    viewBox="0 0 604 478"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M358.464 413.351C225.664 358.551 195.677 516.702 107.964 468.351C20.4373 420.103 -30.9135 313.578 20.4642 227.851C107.964 81.851 153.964 36.851 402.964 4.35101C651.964 -28.149 598.464 129.851 598.464 198.351C598.464 262.564 524.464 481.851 358.464 413.351Z"
      fill="#FFF7AD"
      fillOpacity="0.8"
    />
    <path
      d="M358.464 413.351C225.664 358.551 195.677 516.702 107.964 468.351C20.4373 420.103 -30.9135 313.578 20.4642 227.851C107.964 81.851 153.964 36.851 402.964 4.35101C651.964 -28.149 598.464 129.851 598.464 198.351C598.464 262.564 524.464 481.851 358.464 413.351Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="545.964"
        y1="437.351"
        x2="179.964"
        y2="115.851"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF5F2" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const Blob: React.FC<Props> = ({ pattern, className }) =>
  pattern === 'first' ? FIRST_PATTERN(className) : SECOND_PATTERN(className)

export default Blob
