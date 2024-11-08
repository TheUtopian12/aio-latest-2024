import BannerComponent from "@/components/detailsComponents/BannerComponent";

const Details = async ({ params }: { params: { mediaId: string } }) => {
  const { mediaId } = await params;

  return <BannerComponent mediaId={mediaId} />;
};

export default Details;
