  /**
   * Get Gmail Custom Signature
   * Note: 
   *  - Scope permission must be added when executing (otherwise 403 error).
   *  - Returns HTML format and is escaped. 
   * @return {string} signature
  */
  function getGmailSignature() {
    const userID = Session.getActiveUser().getUserLoginId();
    const url = 'https://gmail.googleapis.com/gmail/v1/users/' + userID + '/settings/sendAs';
    const accessToken = ScriptApp.getOAuthToken();
  
    let options = {
      headers: {
        Authorization: 'Bearer ' + accessToken
      },
      'muteHttpExceptions' : false
    }
  
    let response = UrlFetchApp.fetch(url,options);
    let sendAs = JSON.parse(response);
  
    return sendAs.sendAs[0].signature;
  }
