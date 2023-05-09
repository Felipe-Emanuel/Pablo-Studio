import { SkeletonRecomended } from "src/components/skeletons/SkeletonRecomended";

interface SkeletonLoadingArrayProps{

}

export function SkeletonLoadingArray({}: SkeletonLoadingArrayProps) {
  const skeletonArray = Array.from({ length: 4 }, () => <SkeletonRecomended />);
  const skeletonLoading = skeletonArray.map((skeleton, i) => (
    <div key={i}>{skeleton}</div>
  ));

  const skeletonStyle =
    "flex flex-wrap h-48 md:h-[440px] gap-1 md:gap-2 overflow-hidden";
  const skeletonDiv = <div className={skeletonStyle}>{skeletonLoading}</div>;

  return skeletonDiv
}
