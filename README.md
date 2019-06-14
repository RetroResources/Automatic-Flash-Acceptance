
# Automatic Flash Acceptance

This useful resource will allow you to offer your community a way to automatically enable flash player.


### Configuration

1. Download the most [recent release][1] from GitHub.

2. Open the downloaded file via WinZIP or 7-Zip and extract the folders/files.

3. Navigate to the folder you just extracted on your machine.

4. Open `manifest.json` ith your preferred code editor.  We recommend
[Atom (developed by GitHub)][2] or [Brackets (developed by Adobe Systems)][3]

5. From here modify the following to fit your hotel:
    - `"description": "Automatically allows Flash Player instead of asking for permission each time."`
    - `"name": "Automatic Flash Acceptance"`
    - `"version": "1.0.363.563"` (MAJOR.MINOR.BUILD.PATCH)
    - `"version_name": "1.0 Beta"`

6. Open `background.js` and replace playthishotel.com with your domain:
    - `'primaryPattern': '*://*.playthishotel.com/*',`

7. Optional: Navigate to the`images` folder and replace the 8 images with your Icon.

8. That's it!

### Publishing

- You can publish your newly made extension on the [Chrome Webstore][4] using the guide below. Before you publish your first app, you must pay a one-time $5 USD developer sign-up fee (to Google). A reminder in the dashboard will appear until you pay the fee.

- Simply select all the contents (images folder, background and manifest files) and make a .zip then upload this zip to the Chrome Webstore Dashboard.

- Alternatively you can load unpacked extensions and avoid paying the developer fee.

- To do this you (and your community) need to navigate to `chrome://extensions` and toggle `Developer mode` on then click the `Load unpacked` button and navigate to the path and select the `"1.0.363.563` folder.

Heads up! We recommend publishing your extension via the Chrome Webstore. Because although this will save you $5 you'll be unable to offer automatic extension updates, community members will need to also take extra steps loading an unpacked extension (including downloading and extracting) vs one-click install and you'll likely need to make a detailed guide for installation and host your packed zip file.

[1]: https://github.com/RetroResources/Automatic-Flash-Acceptance/releases
[2]: https://atom.io
[3]: http://brackets.io
[4]: https://chrome.google.com/webstore
