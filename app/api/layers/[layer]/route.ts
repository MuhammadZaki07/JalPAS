import "@/libs/bigIntToJson";
import prisma from "@/libs/prismadb";

type LayerRouteParams = {
  layer: string | number | bigint;
};

export async function GET(
  request: Request,
  { params }: { params: LayerRouteParams }
) {
  const { layer } = params;
  // ini ta parsing jadi Bigint mas soalnya tadi kan awalnya string cuman di prisma dia Bigint jadi conflic
  const id = BigInt(layer);
  const feature = await prisma.featurecollection.findUnique({
    where: {
      id,
    },
    include: {
      feature: {
        include: {
          properties: {
            orderBy: { createdAt: "desc" },
            take: 1,
            include: {
              photo: true,
            },
          },
          geometry: {
            orderBy: { createdAt: "desc" },
            take: 1,
          },
        },
      },
    },
  });

  return Response.json(feature);
}

export async function DELETE(
  request: Request,
  { params }: { params: LayerRouteParams }
) {
  const { layer } = params;
  const id = BigInt(layer);
  const feature = await prisma.featurecollection.delete({
    where: {
      id,
    },
  });

  return Response.json(feature);
}

export async function PATCH(
  request: Request,
  { params }: { params: LayerRouteParams }
) {
  const { layer } = params;
  const body = await request.json();
  const id = BigInt(layer);
  const feature = await prisma.featurecollection.update({
    where: {
      id,
    },
    data: {
      ...body,
    },
  });
  console.log(feature);
  return Response.json(feature);
}
