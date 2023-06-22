import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Draft({ posts }) {
    const click = slug => {
        if (!confirm('是否发布该草稿')) return;
        fetch('/api/posts/publish?slug=' + slug)
            .then(res => res.json())
            .then(res => {
                if (res.code === 0) {
                    toast.success('已成功发布草稿');
                } else {
                    toast.error('草稿发布失败' + res.message);
                }
            });
    };
    return (
        <div className="mt-5">
            <div className="flex justify-between rounded-lg px-5 py-3">
                <span>草稿箱</span>
                <span>{`共有 ${posts.length} 篇草稿`}</span>
            </div>
            <div className="mt-3 space-y-3">
                {posts.map(post => (
                    <div key={post.abbrlink}>
                        <Link
                            href={'/post/' + post.abbrlink}
                            className="hover:dark:bg-gray-700 flex items-center justify-between rounded-lg px-5 py-3 text-lg hover:bg-gray-200"
                        >
                            <div>{post.title}</div>
                            <div className="flex">
                                <div>{post.date}</div>
                                <div
                                    className="ml-3 hover:text-blue-600"
                                    onClick={e => {
                                        e.preventDefault();
                                        click(post.path);
                                    }}
                                >
                                    发布
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
