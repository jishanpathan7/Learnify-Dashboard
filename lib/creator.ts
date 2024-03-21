export const isCreator = (userId?: string | null) => {
  const creatorIds = [
    process.env.NEXT_PUBLIC_CREATOR_ID_1,
    process.env.NEXT_PUBLIC_CREATOR_ID_2,
  ];
  return creatorIds.includes(userId as string);
};
