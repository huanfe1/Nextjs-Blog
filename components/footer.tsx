import { Tooltip } from '@nextui-org/react';
import dayjs from 'dayjs';

export default function footer() {
    const links = [
        {
            title: '知乎',
            link: 'https://www.zhihu.com/people/huanfe1',
            logo: <ZhihuSvg />,
        },
        {
            title: 'Bilibili',
            link: 'https://space.bilibili.com/12785040',
            logo: <BilibiliSvg />,
        },
        {
            title: 'Steam',
            link: 'https://steamcommunity.com/id/huanfei',
            logo: <SteamSvg />,
        },
        {
            title: 'GitHub',
            link: 'https://github.com/huanfe1',
            logo: <GitHubSvg />,
        },
    ];
    return (
        <footer className="flex items-center justify-around border-t border-content2 py-12 pt-8 text-sm duration-250">
            <span>{`© 2022 - ${dayjs().format('YYYY')} All rights reserved.`}</span>
            <span className="hidden space-x-7 sm:flex">
                {links.map(link => (
                    <div key={link.link}>
                        <Tooltip showArrow closeDelay={0} color="foreground" content={link.title}>
                            <a
                                href={link.link}
                                target="_blank"
                                title={link.title}
                                rel="noopener noreferrer external nofollow"
                                className="block transition-transform hover:scale-110"
                            >
                                <div className="hidden">{link.title}</div>
                                {link.logo}
                            </a>
                        </Tooltip>
                    </div>
                ))}
            </span>
        </footer>
    );
}

const svgSize = 24;

const ZhihuSvg = () => {
    return (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize}>
            <path
                d="M656.90624 724.29056l47.42144-33.72544h52.68992V344.89856h-143.31904v346.7264h35.82976z"
                fill="#0066FF"
                p-id="8519"
            ></path>
            <path
                d="M849.92 51.2H174.08c-67.8656 0-122.88 55.0144-122.88 122.88v675.84c0 67.8656 55.0144 122.88 122.88 122.88h675.84c67.8656 0 122.88-55.0144 122.88-122.88V174.08c0-67.8656-55.0144-122.88-122.88-122.88zM495.66208 803.34848l-101.1712-157.05088 44.26752-31.616 67.45088 98.00704c-0.00512 0 23.17824 37.99552-10.5472 90.65984z m38.99392-276.10112v25.2928H408.19712C357.61152 876.06784 204.8 807.04512 204.8 807.04512c140.16512-109.86496 142.7968-254.50496 142.7968-254.50496H208.49152c0-57.9584 52.16256-56.91392 52.16256-56.91392h93.79328v-151.7568h-50.5856C284.89728 429.2352 204.8 425.02144 204.8 425.02144s32.67072-50.5856 54.79936-137.00096c22.12864-86.42048 89.5744-76.928 89.5744-76.928-20.0192 35.82976-29.50656 76.928-29.50656 76.928H485.12c40.04864 0 37.9392 25.2928 37.9392 25.2928v29.51168H411.35616v152.8064H503.04c33.72544 0 31.616 31.616 31.616 31.616zM819.2 747.49952h-102.22592l-88.51968 55.84896-8.42752-55.84896h-64.29184V288.01536H819.2v459.48416z"
                fill="#0066FF"
                p-id="8520"
            ></path>
        </svg>
    );
};

const BilibiliSvg = () => {
    return (
        <svg viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize}>
            <path
                d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0"
                fill="#20B0E3"
                p-id="5739"
            ></path>
            <path
                d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0"
                fill="#20B0E3"
                p-id="5740"
            ></path>
        </svg>
    );
};

const GitHubSvg = () => {
    return (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize}>
            <path
                d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
                p-id="6701"
                fill="currentColor"
            ></path>
        </svg>
    );
};

const SteamSvg = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 65 65"
            fill="#fff"
            width={svgSize}
            height={svgSize}
        >
            <use xlinkHref="#B" x=".5" y=".5" />
            <defs>
                <linearGradient id="A" x2="50%" x1="50%" y2="100%" y1="0%">
                    <stop stopColor="#111d2e" offset="0%" />
                    <stop stopColor="#051839" offset="21.2%" />
                    <stop stopColor="#0a1b48" offset="40.7%" />
                    <stop stopColor="#132e62" offset="58.1%" />
                    <stop stopColor="#144b7e" offset="73.8%" />
                    <stop stopColor="#136497" offset="87.3%" />
                    <stop stopColor="#1387b8" offset="100%" />
                </linearGradient>
            </defs>
            <symbol id="B">
                <g>
                    <path
                        d="M1.305 41.202C5.259 54.386 17.488 64 31.959 64c17.673 0 32-14.327 32-32s-14.327-32-32-32C15.001 0 1.124 13.193.028 29.874c2.074 3.477 2.879 5.628 1.275 11.328z"
                        fill="url(#A)"
                    />
                    <path d="M30.31 23.985l.003.158-7.83 11.375c-1.268-.058-2.54.165-3.748.662a8.14 8.14 0 0 0-1.498.8L.042 29.893s-.398 6.546 1.26 11.424l12.156 5.016c.6 2.728 2.48 5.12 5.242 6.27a8.88 8.88 0 0 0 11.603-4.782 8.89 8.89 0 0 0 .684-3.656L42.18 36.16l.275.005c6.705 0 12.155-5.466 12.155-12.18s-5.44-12.16-12.155-12.174c-6.702 0-12.155 5.46-12.155 12.174zm-1.88 23.05c-1.454 3.5-5.466 5.147-8.953 3.694a6.84 6.84 0 0 1-3.524-3.362l3.957 1.64a5.04 5.04 0 0 0 6.591-2.719 5.05 5.05 0 0 0-2.715-6.601l-4.1-1.695c1.578-.6 3.372-.62 5.05.077 1.7.703 3 2.027 3.696 3.72s.692 3.56-.01 5.246M42.466 32.1a8.12 8.12 0 0 1-8.098-8.113 8.12 8.12 0 0 1 8.098-8.111 8.12 8.12 0 0 1 8.1 8.111 8.12 8.12 0 0 1-8.1 8.113m-6.068-8.126a6.09 6.09 0 0 1 6.08-6.095c3.355 0 6.084 2.73 6.084 6.095a6.09 6.09 0 0 1-6.084 6.093 6.09 6.09 0 0 1-6.081-6.093z" />
                </g>
            </symbol>
        </svg>
    );
};
