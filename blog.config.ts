import { GiscusProps } from '@giscus/react';

type Config = {
    title: string;
    description: string;
    keywords: string[];
    url: string;
    language: string;
    comment: GiscusProps | false;
    analytics?: {
        google?: string;
        la51?: string;
    };
};

export const config: Config = {
    title: '幻非',
    description: '幻非的个人博客，记录一些技术或者想法',
    keywords: ['blog', '博客', '幻非', '技术', '生活', 'huanfei'],
    url: 'https://www.huanfei.top',
    language: 'zh-CN',
    comment: {
        repo: 'huanfe1/blog',
        repoId: 'R_kgDOJfgQ9g',
        mapping: 'pathname',
        category: 'Announcements',
        categoryId: 'DIC_kwDOJfgQ9s4Cdhrx',
        lang: 'zh-CN',
        strict: '1',
        reactionsEnabled: '0',
        emitMetadata: '0',
        inputPosition: 'top',
        loading: 'lazy',
    },
    analytics: {
        google: 'G-XFQZ8KB23B',
        la51: 'JmvyCfPiIR4wTw9W',
    },
};
