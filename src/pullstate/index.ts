import { registerInDevtools, Store } from "pullstate";

export const AppStore = new Store({
  modalCheckPrice: false,
  modalCheckPriceAuto: false,
  modalCheckPriceAutoTitle: "Получите оценку стоимости автомобиля под полную пошлину из Японии!",
  modalQuestionManager: false,
  modalOrder: false,
  modalCallback: false,
  modalContract: false,
});

export const modalCheckPriceAutoTitleUpdate = (text: string) => {
  AppStore.update((store) => {
    store.modalCheckPriceAutoTitle = text;
  });
};

export const modalCheckPriceAutoUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalCheckPriceAuto = condition;
  });
};

export const modalCheckPriceUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalCheckPrice = condition;
  });
};

export const modalQuestionManagerUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalQuestionManager = condition;
  });
};

export const modalOrderUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalOrder = condition;
  });
};

export const modalCallbackUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalCallback = condition;
  });
};

export const modalContractUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalContract = condition;
  });
};

registerInDevtools({
  AppStore,
});
