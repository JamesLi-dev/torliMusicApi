module.exports = {
  apps: [
    {
      name: `torli-music-api`,
      script: `./app.js`,
      env: {
        NODE_ENV: "development",
        PORT: 5678
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
