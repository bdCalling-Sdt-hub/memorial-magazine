"use client";

import { useGetStoriesDetailsQuery } from "@/redux/features/story/storyApi";
import { imgUrl } from "../../../../config";

const StoryPart = ({ id }: { id: string }) => {
  const { data } = useGetStoriesDetailsQuery(id);

  return (
    <div className="text-justify">
      <figure>
        <img
          src={`${imgUrl}${data?.data?.story_image[0]}`}
          className="w-full h-[550px] object-cover rounded"
          alt=""
        />
        <figcaption className="mt-4 text-lg">{""}</figcaption>
      </figure>

      <h2 className="text-2xl font-semibold text-primary my-3">
        We helped our father write his last story
      </h2>
      <p>
        Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
        ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
        consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus
        ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat
        pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.
        Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat,
        pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in
        justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec
        neque.
      </p>

      <figure className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 ">
        <img
          src={`${imgUrl}${data?.data?.story_image[1]}`}
          className="w-full h-[300px] rounded object-cover"
          alt=""
        />
        <figcaption className="text-justify">
          Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
          ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
          consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus
          ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat
          pretium libero. Cras id dui. Aenean ut eros et nisl sagittis
          vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id,
          imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus.
          Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet{" "}
        </figcaption>
      </figure>
      <div className="space-y-4 mt-8 text-justify">
        <p>
          Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
          ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
          consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus
          ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat
          pretium libero. Cras id dui. Aenean ut eros et nisl sagittis
          vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id,
          imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus.
          Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet
          imperdiet orci. Nunc nec neque.
        </p>
        <p>
          Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
          ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
          consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus
          ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat
          pretium libero. Cras id dui. Aenean ut eros et nisl sagittis
          vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id,
          imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus.
          Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet
          imperdiet orci. Nunc nec neque.
        </p>
      </div>
    </div>
  );
};

export default StoryPart;
