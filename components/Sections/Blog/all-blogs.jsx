// import React from "react";
// import Link from "next/link";
// import { allPosts } from "@/.contentlayer/generated";
// import { getMDXComponent } from "next-contentlayer/hooks";

// import { sortPosts, allCoreContent } from "pliny/utils/contentlayer";

// import { compareDesc, format, parseISO } from "date-fns";
// import Image from "next/image";

// function PostCard(post) {
//   console.log(post.summary);

//   return (
//     <div className="flex flex-col gap-2 h-full px-5 bg-mute rounded-3xl py-5">
//       <div className="w-full h-60 mb-4">
//         <Image
//           src={post.thumbnail}
//           width={1000}
//           height={1000}
//           alt="thumbnail"
//           className="w-full h-full object-cover rounded-2xl"
//         />
//       </div>
//       <div className="px-2 flex flex-col gap-2">
//         <h2 className="text-xl font-semibold">
//           <Link
//             href={post.url}
//             className="text-blue-700 hover:text-blue-900"
//             legacyBehavior
//           >
//             {post.title}
//           </Link>
//         </h2>
//         <time dateTime={post.date} className="block text-sm text-gray-500">
//           {format(parseISO(post.date), "LLLL d, yyyy")}
//         </time>
//         <div className="text-sm text-dark-mute">
//           <span>{post.summary}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export const AllBlogs = () => {
//   const posts = allPosts.sort((a, b) =>
//     compareDesc(new Date(a.date), new Date(b.date))
//   );

//   const sortedPosts = sortPosts(posts);
//   const postContent = allCoreContent(sortedPosts);

//   console.log(postContent);

//   return (
//     <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full">
//       {postContent.map((post, idx) => (
//         <PostCard key={idx} {...post} />
//       ))}
//     </div>
//   );
// };
