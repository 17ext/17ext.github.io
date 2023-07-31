import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const postSchema = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
//   regex: z.string().optional(),
});

export const postRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().optional(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 10;
      const { cursor } = input;
      const items = await ctx.prisma.post.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        // include: {
        //   post_category: {
        //     include: {
        //       category: true,
        //     },
        //   },
        // },
      });

      let nextCursor: typeof cursor | undefined = undefined;

      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id;
      }

      return {
        items,
        nextCursor,
      };
    }),
//   create: protectedProcedure
//     .input(postSchema)
//     .mutation(async ({ ctx, input }) => {
//       const result = await ctx.prisma.post.create({
//         data: {
//           ...input,
//           //   createdBy: ctx.session.user.id,
//         },
//       });
//       return result;
//     }),
//   get: publicProcedure
//     .input(
//       z.object({
//         id: z.string(),
//       })
//     )
//     .query(async ({ ctx, input }) => {
//       const result = await ctx.prisma.list.findUnique({
//         where: {
//           id: input.id,
//         },
//         include: {
//           items: true,
//         },
//       });

//       if (!result) return null;

//       return {
//         ...result,
//         author: undefined,
//         items: result.items.map((item) => {
//           return {
//             ...item,
//             author: undefined,
//           };
//         }),
//       };
//     }),
//   update: protectedProcedure
//     .input(
//       z.object({
//         id: z.string(),
//         data: postSchema,
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       const result = await ctx.prisma.rule.update({
//         where: {
//           id: input.id,
//         },
//         data: input.data,
//       });
//       return result;
//     }),
});
