/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundcard: "var(--backgroundcard)",
        backgroundpage: "var(--backgroundpage)",
        "neutralborder-or-line": "var(--neutralborder-or-line)",
        neutraldisabled: "var(--neutraldisabled)",
        "primarydefault-or-border": "var(--primarydefault-or-border)",
        primaryhover: "var(--primaryhover)",
        primarylight: "var(--primarylight)",
        secondary: "var(--secondary)",
        secondarydefault: "var(--secondarydefault)",
        secondaryhover: "var(--secondaryhover)",
        secondarylight: "var(--secondarylight)",
        statuserror: "var(--statuserror)",
        statussuccess: "var(--statussuccess)",
        statuswarning: "var(--statuswarning)",
        textinfo: "var(--textinfo)",
        "texton-primary-or-hover": "var(--texton-primary-or-hover)",
        "textplaceholder-or-disabled-text":
          "var(--textplaceholder-or-disabled-text)",
        textprimary: "var(--textprimary)",
        textsecondary: "var(--textsecondary)",
        "variable-collection-neutral-border-or-line":
          "var(--variable-collection-neutral-border-or-line)",
        "variable-collection-text-placeholder-or-disabled-text":
          "var(--variable-collection-text-placeholder-or-disabled-text)",
        "variable-collection-text-primary":
          "var(--variable-collection-text-primary)",
        "variable-collection-text-secondary":
          "var(--variable-collection-text-secondary)",
      },
      fontFamily: {
        "body-default-medium": "var(--body-default-medium-font-family)",
        "body-default-regular": "var(--body-default-regular-font-family)",
        "body-large-medium": "var(--body-large-medium-font-family)",
        "body-large-regular": "var(--body-large-regular-font-family)",
        "body-small-medium": "var(--body-small-medium-font-family)",
        "body-small-regular": "var(--body-small-regular-font-family)",
        "body-small-semibold": "var(--body-small-semibold-font-family)",
        "caption-xsmall": "var(--caption-xsmall-font-family)",
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
      },
    },
  },
  plugins: [],
};
