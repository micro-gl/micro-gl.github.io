import { process } from '../../src/utils/folder'

const docs_config = (base) => {
  return {    
    name: 'docs',
    groups: [
      {
        title: "Getting Started",
        items: [
          {
            title: "setup",
            route: `getting-started/setup`,
            path: `content/docs/A/hello-world.mdx`
          },
          {
            title: "Features",
            route: `getting-started/features`,
            path: `content/docs/A/hello-world.mdx`
          },

        ]
      },
      {
        title: "Concepts",
        items: [
          {
            title: "Numbers",
            route: `B/hello-world`,
            path: `content/docs/B/hello-world.mdx`
          },
          {
            title: "Pixel coders",
            route: `B/example-post`,
            path: `content/docs/B/example-post.mdx`
          },
          {
            title: "Samplers",
            route: `B/example-post`,
            path: `content/docs/B/example-post.mdx`
          },
          {
            title: "Compostion",
            route: `B/example-post`,
            path: `content/docs/B/example-post.mdx`
          },
          {
            title: "Canvas",
            route: `B/example-post`,
            path: `content/docs/B/example-post.mdx`
          },
          {
            title: "Compostion",
            route: `B/example-post`,
            path: `content/docs/B/example-post.mdx`
          },
          {
            title: "Compostion",
            route: `B/example-post`,
            path: `content/docs/B/example-post.mdx`
          },
          {
            title: "Compostion",
            route: `B/example-post`,
            path: `content/docs/B/example-post.mdx`
          },
        ]
      },

    ]
  }
}

export default process(docs_config())