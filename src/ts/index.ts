import AppComponent from "./components/AppComponent/appComponent.js";

const appContainer = document.querySelector(".app");

if (!appContainer) {
  throw new Error("Missing app container");
}

const appComponent = new AppComponent(appContainer);
appComponent.render();
