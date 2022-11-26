import { action, computed, makeAutoObservable, observable } from 'mobx'

type ThemeMode = 'light' | 'dark'

export class Theme {
  constructor() {
    makeAutoObservable(this)
  }

  @observable
  protected _themeMode: ThemeMode = localStorage.theme || 'light'

  @computed
  get themeMode() {
    return this._themeMode
  }

  @action
  toggle() {
    switch (this._themeMode) {
      case 'dark':
        this._themeMode = 'light'
        break

      default:
        this._themeMode = 'dark'
        break
    }

    localStorage.theme = this._themeMode
  }

  @computed
  mode(light: any, dark: any) {
    switch (this._themeMode) {
      case 'dark':
        return dark

      default:
        return light
    }
  }
}
