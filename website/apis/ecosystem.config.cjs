module.exports = {
  apps: [
    {
      name: 'rark-ui-apis',
      script: 'src/server.ts',
      interpreter: 'bun',
      env: {
        PORT: 4398,
        HOST: '0.0.0.0',
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
    },
  ],
}
