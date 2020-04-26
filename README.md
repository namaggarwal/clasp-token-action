# Clasp Token Action

This action allows you to create `.clasprc.json` file in the home directory. This is needed to push projects in Google App Script.

## Inputs

### `client-id`

**Required** The ClientID of the project.

### `client-secret`

**Required** The ClientSecret of the project.

### `refresh-token`

**Required** RefreshToken of the user.

## How to get the value of the inputs

You need to install clasp locally to get the values.

* Install clasp
```
npm install -g @google/clasp
```

* Enable the Google Apps Script API
https://script.google.com/home/usersettings

* Create Clasp.json locally
Create clasp.json file locally in your project with scriptID from AppScript console.

clasp.json
```
{"scriptId":"1R7XTv-sdhsdjhsjhsjhjsfgdhdgfshgdsfhdfhs"}
```

* Login to clasp
```
clasp login
```

* Get values from local file
```
cat ~/.clasprc.json
```

## Example usage

```
uses: namaggarwal/clasp-token-action@v0.0.1
with:
  client-id: test-client-id
  client-secret: test-client-secret
  refresh-token: test-refresh-token
```

You can specify the clasp command in your npm scripts. For example

package.json
```
{
  "name": "my-project",
  "version": "0.0.1",
  "script": {
    "push-to-app": "clasp push"
  }
}
```

