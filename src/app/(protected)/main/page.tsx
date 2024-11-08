import BannerMovie from "@/components/main/BannerMovie";
import ListMovies from "@/components/main/ListMovies";

const Page = () => {
  return (
    <div className="h-max bg-black">
      <div>
        <BannerMovie />
        <ListMovies />
      </div>
    </div>
  );
};

export default Page;
