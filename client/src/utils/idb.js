import { openDB } from "idb";

const dbPromise = () => {
  if (!("indexedDB" in window)) {
    throw new Error("Browser does not support IndexedDB");
  }
  //consoleLog(openDB)

  return openDB("cryptoFarm", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("carts")) {
        db.createObjectStore("carts").createIndex(
          "carts",
          "carts",
          { unique: true }
        );
      }
    },
  });
};

const checkStorage = async (storeName) => {
  try {
    const db = await dbPromise();
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    return store.get(storeName);
  } catch (error) {
    return error;
  }
};

const saveToStorage = async (storeName, tasks) => {
  try {
    //consoleLog(tasks)
    const db = await dbPromise();
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);

    store.put(tasks, storeName); //

    return tx.complete;
  } catch (error) {
    return error;
  }
};

const updateSorage = async (
  storeName,
  indices,
  search,
  value
) => {
  try {
    const db = await dbPromise();

    const tx = db.transaction(storeName, "readwrite");
    const index = tx.store.index("code");

    for await (const cursor of index.iterate(search)) {
      let found = { ...cursor.value };
      found = value;
      cursor.update(found);
    }
    await tx.done;
  } catch (error) {
    return error;
  }
};
export default {
  checkStorage,
  saveToStorage,
  updateSorage,
};
