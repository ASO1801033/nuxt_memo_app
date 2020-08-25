export const state = () => ({
  memo: [],
  page: 0,
})

export const mutations = {
  insert: function(state, obj) {
    var d = new Date();
    var fmt = d.getFullYear() + '-' + (d.getMonth() + 1) //日付文字列を組み立てる
      + '-' + d.getDate() + ' ' + d.getHours() + ':'
      + d.getMinutes();
    state.memo.unshift({ //memoに画面入力と日付を先頭に格納
      title: obj.title,
      content: obj.content,
      created: fmt,
    })
  },
  set_page: function(state, p) {
    state.page = p;
  },
  remove: function(state, obj) {
    var num = 0;
    for(let i = 0; i < state.memo.length; i++) {
      const ob = state.memo[i];
      if(ob.title == obj.title
          && ob.content == obj.content
          && ob.created == obj.created) {
        alert('remove it! --' + ob.title);
        state.memo.splice(i, 1); //memoのi番目から1つ削除
        return;
      }
    }
  }
}