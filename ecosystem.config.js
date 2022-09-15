module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'balaji',
      host : '192.168.1.140',
      ref  : 'origin/master',
      repo : 'git@github.com/Harikrishnan-VCodingMart/task',
      path : '/opt/deployment/nodeserver',
      'post-deploy' : 'npm install && pm2 start index.js',
    }
  }
};
