module.exports = (api) => {
  const isDevelopment = api.env("development");

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-typescript",
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: [isDevelopment && "react-refresh/babel"].filter(Boolean),
  };
};
