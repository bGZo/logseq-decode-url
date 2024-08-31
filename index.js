function main () {
  logseq.Editor.registerSlashCommand(
    'decode-url',
    async () => {
      const { content, uuid } = await logseq.Editor.getCurrentBlock()
      const decodedContent = decodeURI(content);

      if (content === decodedContent){
        logseq.App.showMsg(`
          Not Identify messgae needed decode.
        `)
      } else {
        logseq.Editor.updateBlock(uuid, decodedContent )
      }

    },
  )

}

// bootstrap
logseq.ready(main).catch(console.error)
