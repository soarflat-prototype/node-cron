const cronJob = require('cron').CronJob;

// crontab形式で時間を指定する
const cronTime = "1 * * * * *";
const job = new cronJob({
  // 実行したい日時
  cronTime,

  // 指定時間に実行される関数（今回は毎分実行される）
  onTick() {
    console.log('onTIck!');
  },

  //ジョブの完了または停止時に実行する関数
  onComplete() {
    console.log('onComplete!');
  },

  // コンストラクタを終了する直前にジョブを開始するかどうか（デフォルトはfalse）
  // falseの場合、ジョブを開始するためにjob.start()を呼び出す必要がある
  start: false,

  // タイムゾーン
  timeZone: 'America/Los_Angeles',
});

//ジョブ開始
job.start();