/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	overrides: [
		{
			files: "*.mdx",
			options: {
				parser: "mdx",
				semi: false,
				htmlWhitespaceSensitivity: "ignore",
			},
		},
	],
};
export default config;
