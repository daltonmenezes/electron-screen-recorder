const { desktopCapturer, remote } = require('electron')
const { Menu } = remote
const selectSource = require('./select-source')

module.exports = async function getVideoSources() {
  const inputSources =
    await desktopCapturer.getSources({
      types: ['window', 'screen']
    })

  const videoOptionsMenu =
    Menu.buildFromTemplate(
      inputSources.map(source => ({
        label: source.name,
        click: () => selectSource(source)
      }))
    )

  videoOptionsMenu.popup()
}