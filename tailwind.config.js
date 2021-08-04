module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "rgb(119 105 207)",
        purple: {
          dark: "rgb(87 72 178)",
        },
      },
      backgroundSize: {
        "30px": "30px 30px",
      },
      backgroundImage: (theme) => ({
        "google-icon": "url('https://img-authors.flaticon.com/google.jpg')",
        "fb-icon":
          "url('https://icons-for-free.com/iconfiles/png/512/fb+logo+social+social+media+social+network+icon-1320191784115198611.png')",
        "in-icon":
          "url('https://www.iconninja.com/files/331/775/772/linkedin-website-logo-service-social-web-communication-icon.svg')",
      }),
      width: {
        "full-without-sidebar": "calc(100% - 16rem)",
        "card-2xl": "calc(20% - 2rem)",
        "card-xl": "calc(25% - 2rem)",
        "card-lg": "calc(33.333% - 2rem)",
        "card-md": "calc(50% - 2rem)",
        "card-sm": "calc(100% - 2rem)",
      },
      height: {
        "full-without-header": "calc(100% - 3.5rem)",
      },
      maxHeight: {
        "full-without-header-tags": "calc(100% - 3rem)",
      },
      lineHeight: {
        4.5: "1.15rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
