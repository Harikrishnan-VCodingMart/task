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
      user : 'hari',
      host : '192.168.1.140',
      ref  : 'origin/master',
      repo : 'git@github.com/Harikrishnan-VCodingMart/task',
      path : '/home/balaji/Documents/sep 14 task/3',
      'post-deploy' : 'npm install && pm2 start index.js',
    }
  }
};
