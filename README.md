# MeetContent

[MeetContent](https://meetcontent.org) is a community of professionals working
with product-related content in tech and IT. We organize local meetups during
which community members can share their knowledge and experience.

MeetContent is currently active in:

- [Kraków](https://meetcontent.github.io/krakow) 🇵🇱
- [Wrocław](https://meetcontent.github.io/wroclaw) 🇵🇱
- Brno 🇨🇿
- [Iberian peninsula](https://meetcontent.github.io/iberia) 🇪🇸🇵🇹

👉
[Join us on Slack](https://join.slack.com/t/meetcontent/shared_invite/enQtNDUyNDI2ODY2MTEyLTJmMjkxMGYwZjgwOTJhYjNjMzU5MWVjODNkYmZiNThkMDE4MDQzOTA0ODRhZTM2MDRkNmRiMTE3NWM4MmU2NzI.)
👈

## Notes from and for members

- [Ideas for MeetContent Iberia](MC_IBERIA_IDEAS.md)
- [Glosario](MC_IBERIA_GLOSARIO.md) from MeetContent Iberia

## How to add a meetcontent event

add a new `.mdx` file under the appropriate sub-folder within [events](events). Use the existing files for reference.

## How to add an article/blog post

- **Kraków and Wrocław**: add a new `.md` or `.mdx` file under [blog](blog), tagging it with the appropriate division (`krakow`, `wroclaw`). Use the existing files for reference.

- **Iberia**: add a new `.md` or `.mdx` file under [blog-iberia](blog-iberia). Use the existing files for reference.

## How to edit a division landing page

The content that appears before the call to action buttons lives in the `.tsx` files under [src/pages](src/pages).
For more radical changes, reach out to our webmasters on Slack. If you are a member of the MeetContent organizing team, join the conversation on the [webpage-admin channel](https://meetcontent.slack.com/archives/C05NK62J7EE).

## Techy Website details

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.
