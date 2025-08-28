// data/blog.js
export const blogPosts = [
  {
    slug: "first-post",
    title: "Blog title heading will go here",
    category: "Category",
    readTime: "5 min read",
    author: "Full Name",
    publishDate: "22 January 2021",
    introduction: `Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget 
      vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu 
      amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
      
      Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. 
      Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In 
      turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.`,

    imageCaption: "Image caption goes here",

    middleSection: `Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In 
      aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor 
      integer aliquam in vitae malesuada fringilla.
      
      Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed 
      condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. 
      Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor 
      neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in 
      tellus, pharetra, porttitor.`,

    quote: `"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non 
      pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem 
      tempor. Diam elit, orci, tincidunt aenean tempus."`,

    continuation: `Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi 
      feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. 
      Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris 
      vestibulum.`,

    conclusion: `Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est 
      sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla 
      purus habitasse.
      
      Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt 
      pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget 
      nibh tortor commodo cursus.
      
      Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat 
      dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec 
      posuere pharetra odio consequat scelerisque et, nunc tortor.Nulla adipiscing erat a erat. Condimentum 
      lorem posuere gravida enim posuere cursus diam.`,

    imageUrl: "/api/placeholder/800/400",
    relatedPosts: [
      {
        slug: "second-post",
        title: "Another blog post title",
        category: "Category",
        readTime: "5 min read",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      },
      {
        slug: "third-post",
        title: "Yet another interesting post",
        category: "Category",
        readTime: "5 min read",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      },
    ],
  },
  {
    slug: "second-post",
    title: "Another blog post title",
    category: "Category",
    readTime: "5 min read",
    author: "Another Author",
    publishDate: "15 February 2021",
    // ... other post content
  },
  // Add more posts as needed
];

// Helper function to get a post by slug
export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

// Helper function to get all posts
export function getAllPosts() {
  return blogPosts;
}
