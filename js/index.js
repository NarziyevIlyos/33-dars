tailwind.config = {
  theme: {
    container: {
      center: "true",
      width: {
        DEFAULT: "100%",
        // tablet
        tb: "600px",
        // largetablet
        ltb: "960px",
        //desktop
        ds: "1200px",
      },
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      // tablet
      tb: "640px",
      // largetablet
      ltb: "1000px",
      //desktop
      ds: "1240px",
    },
    extend: {
      colors: {
        white_text: "#FFFFFF",
        black_text: "#282B22",
        light_black: "#3D4A39",
        btn_color: "#AE7B3C",
        silver: "#F3F3F3",
      },
      backgroundPosition: {
        "x-56": "56% center",
        "x-70": "center center",
        "x-100": "100%",
      },
    },
  },
};
