import { visit } from "unist-util-visit";

// Enables `## Heading text {#custom-id}` syntax, since Astro's built-in
// markdown pipeline only auto-slugs heading text and ignores this suffix.
const CUSTOM_ID_RE = /\s*\{#([a-zA-Z0-9_-]+)\}\s*$/;

export function remarkHeadingIds() {
    return (tree) => {
        visit(tree, "heading", (node) => {
            const lastChild = node.children.at(-1);
            if (!lastChild || lastChild.type !== "text") return;

            const match = CUSTOM_ID_RE.exec(lastChild.value);
            if (!match) return;

            lastChild.value = lastChild.value.slice(0, match.index);
            if (!lastChild.value) node.children.pop();

            node.data ??= {};
            node.data.hProperties ??= {};
            node.data.hProperties.id = match[1];
        });
    };
}
