const core = require('@actions/core');

try {
  const message = core.getInput('custom message');
  console.log('custom action: ${message});
  core.setOutput('message is ', message);
} catch(error){
core.setFailed(error.message);
}
