import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

//   getAll: publicProcedure
//     .input(z.object({ topicId: z.optional(z.string()) }))
//     .query(async ({ ctx, input }) => {
//       const userId = ctx.session?.user?.id;

//       const topicId = input.topicId?.toLowerCase() ?? "";

//       const posts = await ctx.prisma.post.findMany({
//         ...(topicId ? { where: { topicId } } : {}),
//         include: {
//           options: {
//             include: {
//               userVotes: {
//                 where: { userId: userId ?? "" },
//               },
//             },
//           },
//           PostVote: {
//             where: {
//               userId: userId ?? "",
//             },
//           },
//         },
//         orderBy: {
//           createdAt: "desc",
//         },
//         take: 100,
//       });

//       const result = [];
//       for (const post of posts) {
//         result.push(filterPost(post));
//       }
//       return result;
//     }),

    getAll: publicProcedure.query(({ ctx }) => {
      return ctx.prisma.post.findMany();
    }),
});
