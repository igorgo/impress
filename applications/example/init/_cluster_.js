if (api.cluster.isWorker) {
  setInterval(function() {
    //application.events.sendGlobal('TestEvent', { test: 'data' });
  }, 5000);
}
