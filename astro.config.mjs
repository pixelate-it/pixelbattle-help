// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { unified } from "@astrojs/markdown-remark";
import { remarkHeadingIds } from "./src/remark/heading-ids.mjs";

// https://astro.build/config
export default defineConfig({
    markdown: {
        processor: unified({ remarkPlugins: [remarkHeadingIds] })
    },
    integrations: [
        starlight({
            title: "Pixel Battle Помощь",
            defaultLocale: "ru",
            locales: {
                root: { label: "Русский", lang: "ru" }
            },
            social: [
                {
                    icon: "discord",
                    label: "Discord",
                    href: "https://discord.pixelbattle.fun"
                },
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/pixelate-it/pixelbattle-help"
                }
            ],
            editLink: {
                baseUrl:
                    "https://github.com/pixelate-it/pixelbattle-help/edit/next/"
            },
            sidebar: [
                {
                    label: "Правила",
                    items: [{ autogenerate: { directory: "rules" } }]
                },
                {
                    label: "Правовой уголок",
                    items: [{ autogenerate: { directory: "legal" } }]
                }
            ],
            customCss: ["./src/styles/custom.css"]
        })
    ]
});
