module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
      {
        name: 'react-seed',
        script: 'server/app.js',
        cwd: 'server',
        // instances: 'max',
        // exec_mode: 'cluster',
        env: {
          COMMON_VARIABLE: 'true',
          NODE_SERVER: 'true',
          NODE_ENV: 'beta'
        },
        env_production: {
          NODE_SERVER: 'true',
          NODE_ENV: 'production'
        }
      }
    ],
  
    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    // pm2 deploy ecosystem.config.js production setup
    deploy: {
      beta: {
        user: 'root',
        host: '139.196.137.235',
        ref: 'origin/develop',
        repo: 'https://github.com/Nick930826/react-seed.git',
        path: '/workspace/react-seed',
        'post-deploy': 'git reset --hard && git checkout develop && git pull && npm install && pm2 startOrReload ecosystem.config.js',
        env: {
          NODE_ENV: 'beta' // 开启测试环境
        }
      },
      production: {
        user: 'root',
        host: '139.196.137.235',
        ref: 'origin/master',
        repo: 'https://github.com/Nick930826/react-seed.git',
        path: '/workspace/react-seed',
        'post-deploy': 'git pull && npm install && pm2 startOrReload ecosystem.config.js --env production',
        env: {
          NODE_ENV: 'production' // 开启生产环境
        }
      }
    }
  };
  