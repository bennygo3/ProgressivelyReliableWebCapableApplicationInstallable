import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('post to the db');
  console.error('putDb not implemented');

  // creating a connection to the database mentioned above
  const jateDB = await openDB('jate', 1);

  //setting db and db privelages 
  const tx = jateDB.transaction('jate', 'readwrite');

  // open object store
  const store = tx.objectStore('jate');

  const request = store.add({ content: content });

  const result = await request;
  console.log(result);
};
;

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the db')
  console.error('getDb not implemented');

  //connecting to db
  const jateDB = await openDB('jate', 1);

  // new transaction, specifying jatedb and its privelages
  const tx = jateDB.transaction('jate', 'readonly');

  //opening up store
  const store = tx.objectStore('jate');

  //getting all data from db
  const request = store.getAll();

  //confirm request
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
