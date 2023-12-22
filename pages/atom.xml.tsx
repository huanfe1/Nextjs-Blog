import { getAllPosts } from '@/utils/notion';
import dayjs from 'dayjs';
import { Feed } from 'feed';
import { GetServerSideProps } from 'next';

const url = 'https://blog.huanfei.top';

const feed = new Feed({
    title: '幻非',
    description: '幻非的个人博客',
    id: url,
    link: url,
    feedLinks: {
        atom: `${url}/atom.xml`,
    },
    copyright: `Copyright © 2022 - ${dayjs().format('YYYY')} HuanFei All Rights Reserved`,
    author: {
        name: '幻非',
        link: 'https://huanfei.top',
    },
    favicon: `${url}/favicon.ico`,
    generator: 'Nexj.js + Contentlayer',
});

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    if (!res) return;
    const posts = await getAllPosts();
    posts.slice(0, 20).forEach(post => {
        feed.addItem({
            title: `${post.title}`,
            id: `${url}/post/${post.slug}`,
            link: `${url}/post/${post.slug}`,
            description: post.summary,
            // content: post.summary,
            date: dayjs(post.date).toDate(),
            published: dayjs(post.date).toDate(),
        });
    });
    res.setHeader('Content-Type', 'text/xml');
    res.write(feed.atom1());
    res.end();
    return { props: {} };
};

export default function Atom() {
    return null;
}