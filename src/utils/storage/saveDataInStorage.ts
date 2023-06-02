import AsyncStorage from '@react-native-async-storage/async-storage'

type SaveDataInStorageParans = {
  key: string
  dataToSave: unknown
}

const saveDataInStorage = async ({
  key,
  dataToSave
}: SaveDataInStorageParans): Promise<void> => {
  const dataToStorage = JSON.stringify(dataToSave)

  return await AsyncStorage.setItem(key, dataToStorage)
}

export { saveDataInStorage }
