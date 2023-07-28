import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const listSchema = z.object({
  name: z.string().nonempty(),
  alias: z.string().nonempty(),
  regex: z.string().optional(),
});

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.post.findMany();
  // }),

  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(20),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const posts = await prisma.post.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          created_at: "desc",
        },
        // include: {
        //   post_category: {
        //     include: {
        //       category: true,
        //     },
        //   },
        // },
      });

      let nextCursor: typeof cursor | undefined = undefined;

      if (posts.length > limit) {
        const nextItem = posts.pop();
        nextCursor = nextItem!.id;
      }
      return {
        posts,
        nextCursor,
      };
    }),

  //   getAll: publicProcedure
  //     .input(
  //       z.object({
  //         offset: z.number().optional(),
  //         limit: z.number().optional(),
  //       })
  //     )
  //     .query(async ({ ctx, input }) => {
  //       const [count, rows] = await ctx.prisma.$transaction([
  //         ctx.prisma.list.count(),
  //         ctx.prisma.list.findMany({
  //           skip: input.offset,
  //           take: input.limit,
  //           include: {
  //             _count: {
  //               select: {
  //                 items: true,
  //               },
  //             },
  //           },
  //         }),
  //       ]);
  //       return {
  //         count,
  //         rows: rows.map((list) => {
  //           return {
  //             ...list,
  //             author: undefined,
  //           };
  //         }),
  //       };
  //     }),
  create: protectedProcedure
    .input(listSchema)
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.prisma.list.create({
        data: {
          ...input,
          createdBy: ctx.session.user.id,
        },
      });
      return result;
    }),
  get: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const result = await ctx.prisma.list.findUnique({
        where: {
          id: input.id,
        },
        include: {
          items: true,
        },
      });

      if (!result) return null;

      return {
        ...result,
        author: undefined,
        items: result.items.map((item) => {
          return {
            ...item,
            author: undefined,
          };
        }),
      };
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: listSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.prisma.rule.update({
        where: {
          id: input.id,
        },
        data: input.data,
      });
      return result;
    }),
});
