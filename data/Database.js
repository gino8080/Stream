import * as SQLite from 'expo-sqlite';

const DB = SQLite.openDatabase('StreamDB.db', 1);


const initDb = () => {
  DB.exec(
    [
      {
        sql: 'create table if not exists bookmarks (id integer primary key not null, videoid text, title text,image textarea)',
        args: []
      }

    ], false, () =>
    console.log('Db initialized')
  );

}

initDb();

const addBookmark = (bookmark) => {
  debugger;
  console.log("addBookmark", bookmark)
  DB.transaction(
    tx => {
      tx.executeSql("insert into bookmarks (videoid, title, image) values (?, ?, ?)", [bookmark.id, bookmark.snippet.title, bookmark.snippet.thumbnails.standard.url], (_, result) => {
        console.log("insert into bookmarks", result)
        debugger;
      });
      tx.executeSql("select * from bookmarks", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    null,
    this.update
  )

}


const getBookmarks = async () => {

  return new Promise((resolve, reject) => {
    const bookmarks = DB.exec(
      [
        {
          sql: 'select * from bookmarks',
          args: []
        }

      ],
      false,
      (err, results) => {
        if (err) reject(err)
        console.log('got bookmakrs', results)
        resolve(results[0].rows)
      }
    );
  })


}

export {
  DB,
  addBookmark,
  getBookmarks
}

export default DB;
