const gulp = require('gulp');
const oss = require('gulp-aliyun-oss');

// 静态资源上传
gulp.task('upload-beta', () => {
  const opts = {
    accessKeyId: 'PZjTPEWrFy67uYOq',
    accessKeySecret: 'ASlGxc6cMj16RCkZqnl6nzZWn46TSX',
    prefix: 'beta/react-seed', // 测试CDN
    bucket: 'wxbs',
    region: 'oss-cn-hangzhou'
  };
  return gulp.src(['./dist/**']).pipe(oss(opts));
});
gulp.task('upload-release', () => {
  const opts = {
    accessKeyId: 'PZjTPEWrFy67uYOq',
    accessKeySecret: 'ASlGxc6cMj16RCkZqnl6nzZWn46TSX',
    prefix: 'release/react-seed', // 线上正式CDN
    bucket: 'wxbs',
    region: 'oss-cn-hangzhou'
  };
  return gulp.src(['./dist/**']).pipe(oss(opts));
});
