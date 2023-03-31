import { registerInDevtools, Store } from "pullstate";

export const AppStore = new Store({
  modalCheckPrice: false,
  modalCheckPricePoshlina: false,
  modalQuestionManager: false,
  modalOrder: false,
  modalCallback: false,
  modalCheckPriceConstructor: false,
  modalCheckPriceGruzovik: false,
  modalCheckPriceSpectehnic: false,
});

export const modalCheckPricePoshlinaUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalCheckPricePoshlina = condition;
  });
};

export const modalCheckPriceConstructorUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalCheckPriceConstructor = condition;
  });
};

export const modalCheckPriceGruzovikUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalCheckPriceGruzovik = condition;
  });
};

export const modalCheckPriceSpectehnicUpdate = (condition: boolean) => {
  AppStore.update((store) => {
    store.modalCheckPriceSpectehnic = condition;
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

registerInDevtools({
  AppStore,
});
