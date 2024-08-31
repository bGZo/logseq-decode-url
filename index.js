function main () {
  logseq.Editor.registerSlashCommand(
    'decode-url',
    async () => {
      // const handle = [
      //   '%20'
      // ]
      const { content, uuid } = await logseq.Editor.getCurrentBlock()
      const decodedContent = decodeURI(content);

      // var flag = false;
      // handle.forEach(i => {
      //   if (content.includes(i)) {
      //     flag = true
      //   }
      // })

      if (content === decodedContent){
        logseq.App.showMsg(`
          Not Identify messgae needed decode.
        `)
      } else {
        logseq.Editor.updateBlock(uuid, decodedContent )
      }

      // logseq.App.showMsg(`
      //   [:div.p-2
      //     [:h1 "#${uuid}"]
      //     [:h2.text-xl "${content}"]]
      //     [:h2.text-xl "${decodedURL}"]]
      // `)
    },
  )

  // logseq.Editor.registerBlockContextMenuItem('🦜 Send A Tweet',
  //   ({ blockId }) => {
  //     logseq.App.showMsg(
  //       '🦜 Tweet from block content #' + blockId,
  //     )
  //   })
}

// bootstrap
logseq.ready(main).catch(console.error)
