module.exports = (api) => {
  const isProduction = api.env("production");
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
    plugins: [!isProduction && "react-refresh/babel"].filter(Boolean),
  };
};
