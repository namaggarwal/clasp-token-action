const fs = require('fs');
const core = require('@actions/core');
const homeDir = require('os').homedir();

async function run() {
  const clientID = core.getInput('client-id');
  const clientSecret = core.getInput('client-secret');
  const refreshToken = core.getInput('refresh-token');
  const claspJSON = getClaspJSON(clientID, clientSecret, refreshToken);
  try{
    fs.writeFile(require('path').join(homeDir,'.clasprc.json'),JSON.stringify(claspJSON), error => {
      if(error) core.setFailed(error.message);
    })
  }catch(error) {
    core.setFailed(error.message);
  }
}

function getClaspJSON(clientID, clientSecret, refreshToken) {
  const claspJSON = {
    token: {
      access_token: "",
      scope: "https://www.googleapis.com/auth/script.projects https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/logging.read https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/script.webapp.deploy https://www.googleapis.com/auth/script.deployments https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/service.management",
      token_type: "Bearer",
      expiry_date: 0,
      refresh_token: ""
    },
    oauth2ClientSettings: {
      clientId: "",
      clientSecret: "",
      redirectUri: "http://localhost"
    },
    isLocalCreds: false
  }
  return {
    ...claspJSON,
    token: {
      ...claspJSON.token,
      refresh_token: refreshToken
    },
    oauth2ClientSettings: {
      ...claspJSON.oauth2ClientSettings,
       clientId: clientID,
       clientSecret,
      }
    }
}

run();