import { readingTime } from 'reading-time-estimator';

import { PostProps } from '@/utils/data';

export default function Header({ post }: { post: PostProps }) {
    return (
        <header>
            {post.cover && (
                <div className="mb-8 aspect-video overflow-hidden rounded shadow">
                    <img src={post.cover} alt={post.title} />
                </div>
            )}
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <div className="my-3 opacity-60">
                <time dateTime={post.date}>{post.date}</time>
                <span className="mx-1">·</span>
                <span>{'约 ' + readingTime(post.content, 300, 'cn').words + ' 字'}</span>
                {post.update && (
                    <>
                        <span className="mx-1">·</span>
                        <span>{`编辑于 ${post.update}`}</span>
                    </>
                )}
            </div>
        </header>
    );
}
