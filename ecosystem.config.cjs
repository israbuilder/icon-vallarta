module.exports = {
  apps: [
    {
      name: 'icon-vallarta',
      script: './dist/server/entry.mjs',
      cwd: '/var/www/icon-vallarta.mx/html/icon-vallarta',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 3004, // Ajusta este puerto si el 3004 está ocupado
      },
    },
  ],
};
