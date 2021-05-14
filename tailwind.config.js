module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
