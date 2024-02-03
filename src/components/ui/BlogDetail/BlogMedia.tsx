import blogs from "../../../../public/db/blogs.json";

const BlogMedia = ({ id }: { id: string }) => {
  const blog = blogs.find((blog) => blog.id.toString() === id);
  return (
    <div className="text-justify">
      <figure>
        <img
          src={blog?.image}
          className="w-full h-[450px] object-cover"
          alt=""
        />
        <figcaption className="mt-4 text-lg">{blog?.date}</figcaption>
      </figure>

      <h2 className="text-2xl font-semibold text-primary my-3">
        We helped our father write his last story
      </h2>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>

      <div className="mt-10 text-justify">
        <h2 className="text-2xl font-semibold  my-3">Industry Description</h2>
        <p>
          We understand that every individual&#39;s journey is distinctive. Our
          services are designed to respect and embrace diverse backgrounds,
          traditions, and beliefs. Whether you seek a traditional funeral
          service, a celebration of life ceremony, or a customized tribute,
          we&#39;re committed to honoring your loved one&#39;s legacy in a way
          that reflects their unique story.
        </p>
        <h2 className="text-2xl font-semibold  mt-12">Standard Dummy Text</h2>
        <p>
          We understand that every individual&#39;s journey is distinctive. Our
          services are designed to respect and embrace diverse backgrounds,
          traditions, and beliefs. Whether you seek a traditional funeral
          service, a celebration of life ceremony, or a customized tribute,
          we&#39;re committed to honoring your loved one&#39;s legacy in a way
          that reflects their unique story.
        </p>
        <h2 className="text-2xl font-semibold  mt-12">Standard Dummy Text</h2>
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

        <h2 className="text-lg mt-5">
          <span className="font-bold">Tags:</span> Burial, Cremation, Legal
          Service, Memorials
        </h2>
      </div>
    </div>
  );
};

export default BlogMedia;
